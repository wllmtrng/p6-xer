import { XerParser } from '../XerParser';
import * as fs from 'fs';
import * as path from 'path';

jest.mock('fs');
jest.mock('xlsx');

describe('XerParser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('parse', () => {
    it('should parse XER file header correctly', () => {
      const mockContent = 'ERMHDR\t8.2\nSome other content';
      (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);

      const parser = new XerParser();
      const result = parser.parse('dummy.xer');

      expect(result.version).toBe('8.2');
    });

    it('should parse table structure correctly', () => {
      const mockContent = [
        '%T\tTASK',
        '%F\ttask_id\ttask_name',
        '%R\t1\tTask 1',
        '%R\t2\tTask 2'
      ].join('\n');

      (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);

      const parser = new XerParser();
      const result = parser.parse('dummy.xer');

      expect(result.tables).toHaveLength(1);
      expect(result.tables[0].name).toBe('TASK');
      expect(result.tables[0].fields).toEqual(['task_id', 'task_name']);
      expect(result.tables[0].rows).toHaveLength(2);
      expect(result.tables[0].rows[0]).toEqual({
        task_id: '1',
        task_name: 'Task 1'
      });
    });

    it('should skip empty tables when option is enabled', () => {
      const mockContent = [
        '%T\tEMPTY_TABLE',
        '%F\tfield1\tfield2',
        '%T\tTASK',
        '%F\ttask_id\ttask_name',
        '%R\t1\tTask 1'
      ].join('\n');

      (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);

      const parser = new XerParser({ skipEmptyTables: true });
      const result = parser.parse('dummy.xer');

      expect(result.tables).toHaveLength(1);
      expect(result.tables[0].name).toBe('TASK');
    });
  });
}); 