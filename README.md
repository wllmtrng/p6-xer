# P6 XER Parser

A TypeScript module for parsing and processing Primavera P6 XER files. This package provides both synchronous and asynchronous methods for parsing XER files and exporting them to Excel format.

## Features

- Parse Primavera P6 XER files
- Support for both synchronous and asynchronous operations
- Export to Excel (XLSX) format
- Automatic encoding detection
- Command-line interface (CLI)
- TypeScript support with type definitions
- Handles malformed data gracefully
- Supports empty tables and special characters

## Installation

```bash
npm install p6-xer
```

## Usage

### As a Module

```typescript
import { XerParser } from 'p6-xer';

// Create a parser instance
const parser = new XerParser({
    skipEmptyTables: false // optional
});

// Async usage
async function parseXerAsync() {
    const data = await parser.parse('path/to/file.xer');
    await parser.exportToXlsx(data, {
        outputPath: 'output.xlsx',
        sheetNamePrefix: 'PREFIX_' // optional
    });
}

// Sync usage
function parseXerSync() {
    const data = parser.parseSync('path/to/file.xer');
    parser.exportToXlsxSync(data, {
        outputPath: 'output.xlsx'
    });
}
```

### Command Line Interface

```bash
# Install globally
npm install -g p6-xer

# Export XER to Excel
xer-parser export input.xer -o output.xlsx

# With options
xer-parser export input.xer -o output.xlsx -p PREFIX --skip-empty
```

## API Reference

### `XerParser`

#### Constructor Options

```typescript
interface XerParserOptions {
    encoding?: BufferEncoding;     // Optional encoding override
    skipEmptyTables?: boolean;     // Skip tables with no rows
}
```

#### Methods

- `parse(filePath: string): Promise<XerData>`
- `parseSync(filePath: string): XerData`
- `exportToXlsx(data: XerData, options: ExportOptions): Promise<void>`
- `exportToXlsxSync(data: XerData, options: ExportOptions): void`

#### Types

```typescript
interface XerData {
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

interface XerTable {
    name: string;
    fields: string[];
    rows: Record<string, string>[];
}

interface ExportOptions {
    outputPath: string;
    sheetNamePrefix?: string;
}
```

## CLI Options

```
Options:
  -o, --output <path>   output file path (default: "output.xlsx")
  -p, --prefix <prefix> sheet name prefix
  --skip-empty          skip empty tables
  -h, --help           display help for command
```

## License

LGPL-3.0-only

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 