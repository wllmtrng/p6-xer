export interface XerTable {
  name: string;
  fields: string[];
  rows: Record<string, string>[];
}

export interface XerData {
  tables: XerTable[];
  version?: string;
  project?: string;
}

export interface XerParserOptions {
  encoding?: BufferEncoding;
  skipEmptyTables?: boolean;
}

export interface ExportOptions {
  outputPath: string;
  format?: 'xlsx' | 'json' | 'csv';
  sheetNamePrefix?: string;
} 