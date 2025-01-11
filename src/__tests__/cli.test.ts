import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { exportCommand } from '../cli';

// Mock XerParser
jest.mock('../XerParser', () => {
  return {
    XerParser: jest.fn().mockImplementation(() => ({
      parse: jest.fn().mockResolvedValue({ tables: [] }),
      exportToXlsx: jest.fn().mockResolvedValue(undefined)
    }))
  };
});

describe('CLI', () => {
  const testXerFile = 'test.xer';
  const testXlsxFile = 'test.xlsx';
  let testProgram: Command;

  beforeEach(() => {
    // Create a new Command instance for each test
    testProgram = new Command();
    exportCommand(testProgram);
    // Reset mocks
    jest.clearAllMocks();
  });

  describe('export command', () => {
    it('should handle basic export with default options', async () => {
      const args = ['node', 'cli.js', 'export', testXerFile];
      await testProgram.parseAsync(args);
      
      // Verify XerParser was instantiated with default options
      expect(require('../XerParser').XerParser).toHaveBeenCalledWith({
        skipEmptyTables: false
      });
    });

    it('should handle export with custom output path', async () => {
      const args = ['node', 'cli.js', 'export', testXerFile, '-o', testXlsxFile];
      await testProgram.parseAsync(args);
      
      const parser = require('../XerParser').XerParser.mock.results[0].value;
      expect(parser.exportToXlsx).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          outputPath: testXlsxFile
        })
      );
    });

    it('should handle export with sheet prefix', async () => {
      const prefix = 'TEST_';
      const args = ['node', 'cli.js', 'export', testXerFile, '-p', prefix];
      await testProgram.parseAsync(args);
      
      const parser = require('../XerParser').XerParser.mock.results[0].value;
      expect(parser.exportToXlsx).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          sheetNamePrefix: prefix
        })
      );
    });

    it('should handle export with skip empty tables', async () => {
      const args = ['node', 'cli.js', 'export', testXerFile, '--skip-empty'];
      await testProgram.parseAsync(args);
      
      expect(require('../XerParser').XerParser).toHaveBeenCalledWith({
        skipEmptyTables: true
      });
    });

    it('should handle file not found error', async () => {
      const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();
      const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => undefined as never);
      
      // Mock the XerParser implementation for this test
      const mockParse = jest.fn().mockRejectedValueOnce(new Error('File not found'));
      require('../XerParser').XerParser.mockImplementationOnce(() => ({
        parse: mockParse,
        exportToXlsx: jest.fn()
      }));

      const args = ['node', 'cli.js', 'export', 'nonexistent.xer'];
      await testProgram.parseAsync(args);
      
      expect(mockConsoleError).toHaveBeenCalledWith('Error:', 'File not found');
      expect(mockExit).toHaveBeenCalledWith(1);

      mockConsoleError.mockRestore();
      mockExit.mockRestore();
    });
  });
}); 