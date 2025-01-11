#!/usr/bin/env node

import { Command } from 'commander';
import { XerParser } from './XerParser';
import path from 'path';

const program = new Command();

program
  .name('xer-parser')
  .description('CLI tool for parsing Primavera P6 XER files')
  .version('1.0.0');

program
  .command('export')
  .description('Export XER file to Excel format')
  .argument('<xerFile>', 'Path to the XER file')
  .option('-o, --output <path>', 'Output file path', 'output.xlsx')
  .option('-p, --prefix <prefix>', 'Sheet name prefix', '')
  .option('--skip-empty', 'Skip empty tables', true)
  .action((xerFile, options) => {
    try {
      const parser = new XerParser({
        skipEmptyTables: options.skipEmpty
      });

      // Parse the XER file
      parser.parse(xerFile);

      // Determine output path
      const outputPath = path.resolve(options.output);

      // Export to Excel
      parser.exportToXlsx({
        outputPath,
        sheetNamePrefix: options.prefix
      });

      console.log(`Successfully exported to ${outputPath}`);
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });

program.parse(); 