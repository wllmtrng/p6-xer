import { XerParser, XerParserError, XerData, XerTable, XerParserOptions, ExportOptions } from '../index';

describe('Index exports', () => {
  it('should export XerParser class', () => {
    expect(XerParser).toBeDefined();
    expect(typeof XerParser).toBe('function');
  });

  it('should export XerParserError class', () => {
    expect(XerParserError).toBeDefined();
    expect(typeof XerParserError).toBe('function');
  });

  it('should create XerParserError instance', () => {
    const error = new XerParserError('test error');
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('test error');
  });

  // Type tests (these will fail at compile time if types are not exported correctly)
  it('should have correct type definitions', () => {
    const xerData: XerData = {
      tables: [{
        name: 'test',
        fields: ['field1'],
        rows: [{ field1: 'value1' }]
      }]
    };

    const xerTable: XerTable = {
      name: 'test',
      fields: ['field1'],
      rows: [{ field1: 'value1' }]
    };

    const parserOptions: XerParserOptions = {
      encoding: 'utf8',
      skipEmptyTables: true
    };

    const exportOptions: ExportOptions = {
      outputPath: 'test.xlsx',
      sheetNamePrefix: 'TEST_'
    };

    expect(xerData).toBeDefined();
    expect(xerTable).toBeDefined();
    expect(parserOptions).toBeDefined();
    expect(exportOptions).toBeDefined();
  });
}); 