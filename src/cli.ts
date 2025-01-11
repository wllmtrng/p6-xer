#!/usr/bin/env node

import { Command } from 'commander';
import { XerParser } from './XerParser';

const program = new Command();

program
  .name('xer-parser')
  .description('CLI to parse and export Primavera P6 XER files')
  .version('1.0.0');

program
  .command('export')
  .description('Export XER file to Excel format')
  .argument('<xerFile>', 'path to the XER file')
  .option('-o, --output <path>', 'output file path', 'output.xlsx')
  .option('-p, --prefix <prefix>', 'sheet name prefix')
  .option('--skip-empty', 'skip empty tables')
  .action(async (xerFile, options) => {
    try {
      const parser = new XerParser({
        skipEmptyTables: options.skipEmpty
      });

      console.log(`Parsing ${xerFile}...`);
      const data = await parser.parse(xerFile);

      console.log(`Exporting to ${options.output}...`);
      await parser.exportToXlsx(data, {
        outputPath: options.output,
        sheetNamePrefix: options.prefix
      });

      console.log('Export completed successfully.');
      console.log('Tables exported:', data.tables.map(t => t.name).join(', '));
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program.parse(); 