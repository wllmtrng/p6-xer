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
  encoding?: string | null;
  skipEmptyTables?: boolean;
  fallbackEncoding?: string;
}

export interface ExportOptions {
  outputPath: string;
  format?: 'xlsx' | 'json' | 'csv';
  sheetNamePrefix?: string;
}

export interface EncodingDetectionResult {
  encoding: string;
  confidence: number;
}

export class XerParserError extends Error {
  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = 'XerParserError';
  }
}

export class EncodingError extends XerParserError {
  constructor(message: string, public readonly detectedEncoding?: string) {
    super(message);
    this.name = 'EncodingError';
  }
} 