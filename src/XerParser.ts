import * as fs from 'fs';
import * as chardet from 'chardet';
import * as iconv from 'iconv-lite';

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
    version?: string;
    project?: string;
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

export class XerParser {
    private options: Required<XerParserOptions>;

    constructor(options: XerParserOptions = {}) {
        this.options = {
            encoding: options.encoding || 'utf8',
            skipEmptyTables: options.skipEmptyTables || false,
        };
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
                    case '%V':
                        data.version = values[0];
                        break;
                    case '%P':
                        data.project = values[0];
                        break;
                    case '%T':
                        if (currentTable) {
                            if (!this.options.skipEmptyTables || currentTable.rows.length > 0) {
                                data.tables.push(currentTable);
                            }
                        }
                        currentTable = {
                            name: values[0],
                            fields: [],
                            rows: []
                        };
                        break;
                    case '%F':
                        if (currentTable) {
                            currentTable.fields = values;
                        }
                        break;
                    case '%R':
                        if (currentTable && currentTable.fields.length > 0) {
                            const row: Record<string, string> = {};
                            currentTable.fields.forEach((field, index) => {
                                row[field] = values[index] || '';
                            });
                            currentTable.rows.push(row);
                        }
                        break;
                    case '%E':
                        if (currentTable) {
                            if (!this.options.skipEmptyTables || currentTable.rows.length > 0) {
                                data.tables.push(currentTable);
                            }
                            currentTable = null;
                        }
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
} 