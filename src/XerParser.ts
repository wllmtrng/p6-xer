import { readFileSync } from 'fs';
import * as XLSX from 'xlsx';
import { XerData, XerTable, XerParserOptions, ExportOptions } from './types';

export class XerParser {
  private data: XerData = { tables: [] };
  private options: Required<XerParserOptions>;

  constructor(options: XerParserOptions = {}) {
    this.options = {
      encoding: options.encoding || 'utf8',
      skipEmptyTables: options.skipEmptyTables ?? true
    };
  }

  public parse(filePath: string): XerData {
    const content = readFileSync(filePath, { encoding: this.options.encoding });
    const lines = content.split('\n').map(line => line.trim());
    
    let currentTable: XerTable | null = null;
    let isHeader = false;

    for (const line of lines) {
      if (!line) continue;

      if (line.startsWith('ERMHDR')) {
        const [_, version] = line.split('\t');
        this.data.version = version;
        continue;
      }

      if (line.startsWith('%T')) {
        // New table starts
        if (currentTable && (!this.options.skipEmptyTables || currentTable.rows.length > 0)) {
          this.data.tables.push(currentTable);
        }
        currentTable = {
          name: line.substring(3),
          fields: [],
          rows: []
        };
        isHeader = true;
        continue;
      }

      if (line.startsWith('%F') && currentTable) {
        // Field definitions
        currentTable.fields = line.substring(3).split('\t');
        continue;
      }

      if (line.startsWith('%R') && currentTable) {
        // Data row
        const values = line.substring(3).split('\t');
        const row: Record<string, string> = {};
        currentTable.fields.forEach((field, index) => {
          row[field] = values[index] || '';
        });
        currentTable.rows.push(row);
      }
    }

    // Add the last table if it exists
    if (currentTable && (!this.options.skipEmptyTables || currentTable.rows.length > 0)) {
      this.data.tables.push(currentTable);
    }

    return this.data;
  }

  public exportToXlsx(options: ExportOptions): void {
    const workbook = XLSX.utils.book_new();
    const prefix = options.sheetNamePrefix || '';

    this.data.tables.forEach(table => {
      // Convert rows to worksheet
      const worksheet = XLSX.utils.json_to_sheet(table.rows);
      
      // Ensure sheet name is valid and not too long
      let sheetName = `${prefix}${table.name}`.substring(0, 31);
      
      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    // Write workbook to file
    XLSX.writeFile(workbook, options.outputPath);
  }

  public getData(): XerData {
    return this.data;
  }
} 