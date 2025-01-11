# P6-XER Parser

A TypeScript module for parsing and processing Primavera P6 XER files. This tool allows you to extract data from XER files and export it to various formats, with the current implementation supporting Excel (XLSX) export.

## Features

- Parse Primavera P6 XER files
- Export data to Excel format (each table as a separate sheet)
- TypeScript support
- Command-line interface (CLI)
- Unit tested

## Installation

```bash
npm install p6-xer
```

## Usage

### As a Module

```typescript
import { XerParser } from 'p6-xer';

const parser = new XerParser();
await parser.parse('path/to/file.xer');
await parser.exportToXlsx('output.xlsx');
```

### Command Line Interface

```bash
# Export XER file to Excel
npx p6-xer export input.xer -o output.xlsx

# Show help
npx p6-xer --help
```

## Options

### Parser Options

- `encoding`: Input file encoding (default: 'utf8')
- `skipEmptyTables`: Skip tables with no data (default: false)

### Export Options

- `-o, --output`: Output file path (default: 'output.xlsx')
- `-p, --prefix`: Sheet name prefix
- `--skip-empty`: Skip empty tables

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 