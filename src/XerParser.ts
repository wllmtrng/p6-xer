import * as fs from 'fs';
import * as chardet from 'chardet';
import * as iconv from 'iconv-lite';
import * as XLSX from 'xlsx';

export class XerParserError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'XerParserError';
    }
}

export class EncodingError extends XerParserError {
    constructor(message: string) {
        super(message);
        this.name = 'EncodingError';
    }
}

export interface XerTable {
    name: string;
    fields: string[];
    rows: Record<string, string>[];
}

export interface XerData {
    tables: XerTable[];
    header?: {
        version: string;
        date: string;
        project: string;
        id: string;
        user: string;
        database: string;
        system: string;
        currency: string;
    };
}

export interface XerParserOptions {
    encoding?: BufferEncoding;
    skipEmptyTables?: boolean;
}

export interface ExportOptions {
    outputPath: string;
    sheetNamePrefix?: string;
}

export class XerParser {
    private options: Required<XerParserOptions>;

    constructor(options: XerParserOptions = {}) {
        this.options = {
            encoding: options.encoding || 'utf8',
            skipEmptyTables: options.skipEmptyTables || false,
        };
    }

    private handleTableStart(currentTable: XerTable | null, values: string[], data: XerData): XerTable {
        if (currentTable && (!this.options.skipEmptyTables || currentTable.rows.length > 0)) {
            data.tables.push(currentTable);
        }
        return {
            name: values[0],
            fields: [],
            rows: []
        };
    }

    private handleFieldDefinition(currentTable: XerTable | null, values: string[]): void {
        if (currentTable) {
            currentTable.fields = values;
        }
    }

    private handleDataRow(currentTable: XerTable | null, values: string[]): void {
        if (currentTable && currentTable.fields.length > 0) {
            const row: Record<string, string> = {};
            currentTable.fields.forEach((field, index) => {
                row[field] = values[index] || '';
            });
            currentTable.rows.push(row);
        }
    }

    private handleTableEnd(currentTable: XerTable | null, data: XerData): XerTable | null {
        if (currentTable) {
            if (!this.options.skipEmptyTables || currentTable.rows.length > 0) {
                data.tables.push(currentTable);
            }
            return null;
        }
        return currentTable;
    }

    private parseErmhdrLine(line: string): XerData['header'] {
        const parts = line.split('\t');
        if (parts[0] !== 'ERMHDR' || parts.length < 9) {
            return undefined;
        }

        return {
            version: parts[1],
            date: parts[2],
            project: parts[3],
            id: parts[4],
            user: parts[5],
            database: parts[6],
            system: parts[7],
            currency: parts[8]
        };
    }

    public async parse(filePath: string): Promise<XerData> {
        try {
            const buffer = fs.readFileSync(filePath);
            const encoding = this.detectEncoding(buffer);
            const content = iconv.decode(buffer, encoding);

            const lines = content.split(/\r?\n/);
            const data: XerData = {
                tables: []
            };

            // Check for ERMHDR line at the start
            if (lines.length > 0) {
                data.header = this.parseErmhdrLine(lines[0]);
            }

            let currentTable: XerTable | null = null;

            // Start from line 1 if we found a header, otherwise start from line 0
            for (let i = data.header ? 1 : 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;

                const [type, ...values] = line.split('\t');

                switch (type) {
                    case '%T':
                        currentTable = this.handleTableStart(currentTable, values, data);
                        break;
                    case '%F':
                        this.handleFieldDefinition(currentTable, values);
                        break;
                    case '%R':
                        this.handleDataRow(currentTable, values);
                        break;
                    case '%E':
                        currentTable = this.handleTableEnd(currentTable, data);
                        break;
                }
            }

            return data;
        } catch (error) {
            if (error instanceof Error) {
                throw new XerParserError(error.message);
            }
            throw new XerParserError('Unknown error occurred while parsing XER file');
        }
    }

    private detectEncoding(buffer: Buffer): string {
        try {
            const detected = chardet.analyse(buffer);
            const encoding = detected[0]?.name || 'UTF-8';
            
            if (!iconv.encodingExists(encoding)) {
                throw new EncodingError(`Unsupported encoding: ${encoding}`);
            }
            
            return encoding;
        } catch (error) {
            if (error instanceof EncodingError) {
                throw error;
            }
            throw new EncodingError('Failed to detect file encoding');
        }
    }

    public async exportToXlsx(data: XerData, options: ExportOptions): Promise<void> {
        const workbook = XLSX.utils.book_new();

        // Add header information if available
        if (data.header) {
            const headerData = [{
                Field: 'Version',
                Value: data.header.version
            }, {
                Field: 'Date',
                Value: data.header.date
            }, {
                Field: 'Project',
                Value: data.header.project
            }, {
                Field: 'ID',
                Value: data.header.id
            }, {
                Field: 'User',
                Value: data.header.user
            }, {
                Field: 'Database',
                Value: data.header.database
            }, {
                Field: 'System',
                Value: data.header.system
            }, {
                Field: 'Currency',
                Value: data.header.currency
            }];

            const headerSheet = XLSX.utils.json_to_sheet(headerData);
            XLSX.utils.book_append_sheet(workbook, headerSheet, 'Header');
        }

        // Add each table as a separate sheet
        data.tables.forEach(table => {
            const sheetName = options.sheetNamePrefix 
                ? `${options.sheetNamePrefix}_${table.name}`.substring(0, 31) 
                : table.name.substring(0, 31);

            // Process rows to handle long text
            const processedRows = table.rows.map(row => {
                const processedRow: Record<string, string> = {};
                for (const [key, value] of Object.entries(row)) {
                    // Truncate values that are too long for Excel
                    processedRow[key] = value.length > 32000 
                        ? value.substring(0, 32000) + '... (truncated)'
                        : value;
                }
                return processedRow;
            });
                
            const worksheet = XLSX.utils.json_to_sheet(processedRows);
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
        });

        // If no sheets were added, add an empty sheet
        if (workbook.SheetNames.length === 0) {
            const emptySheet = XLSX.utils.json_to_sheet([]);
            XLSX.utils.book_append_sheet(workbook, emptySheet, 'Empty');
        }
        
        XLSX.writeFile(workbook, options.outputPath);
    }
} 