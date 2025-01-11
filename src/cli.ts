#!/usr/bin/env node

import { Command } from 'commander';
import { XerParser } from './XerParser';

export function exportCommand(program: Command) {
  program
    .command('export')
    .argument('<file>', 'XER file to parse')
    .option('-o, --output <path>', 'output file path', 'output.xlsx')
    .option('-p, --prefix <prefix>', 'sheet name prefix')
    .option('--skip-empty', 'skip empty tables')
    .action(async (file: string, options: any) => {
      try {
        const parser = new XerParser({
          skipEmptyTables: options.skipEmpty || false
        });

        const data = await parser.parse(file);
        await parser.exportToXlsx(data, {
          outputPath: options.output,
          sheetNamePrefix: options.prefix
        });

        console.log('Export completed successfully!');
      } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : 'Unknown error occurred');
        process.exit(1);
      }
    });
}

if (require.main === module) {
  const program = new Command();
  exportCommand(program);
  program.parse(process.argv);
} 