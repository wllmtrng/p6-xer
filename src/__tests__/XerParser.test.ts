import { XerParser, EncodingError, XerParserError } from '../XerParser';
import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';

describe('XerParser', () => {
    const dataDir = path.join(__dirname, 'data');
    const comprehensiveFile = path.join(dataDir, 'comprehensive.xer');
    const malformedFile = path.join(dataDir, 'malformed.xer');
    const encodingsFile = path.join(dataDir, 'encodings.xer');

    describe('file reading', () => {
        it('should handle file not found error', async () => {
            const parser = new XerParser();
            await expect(parser.parse('nonexistent.xer')).rejects.toThrow(XerParserError);
        });

        it('should handle file permission error', async () => {
            // Create a file with no read permissions
            const protectedFile = path.join(dataDir, 'protected.xer');
            fs.writeFileSync(protectedFile, 'test');
            fs.chmodSync(protectedFile, 0o000);

            const parser = new XerParser();
            await expect(parser.parse(protectedFile)).rejects.toThrow(XerParserError);

            // Cleanup
            fs.chmodSync(protectedFile, 0o666);
            fs.unlinkSync(protectedFile);
        });

        it('should handle empty file', async () => {
            // Create an empty file
            const emptyFile = path.join(dataDir, 'empty.xer');
            fs.writeFileSync(emptyFile, '');

            const parser = new XerParser();
            const data = await parser.parse(emptyFile);
            
            expect(data.tables).toHaveLength(0);
            expect(data.header).toBeUndefined();

            // Cleanup
            fs.unlinkSync(emptyFile);
        });

        it('should handle file with only whitespace', async () => {
            // Create a file with only whitespace
            const whitespaceFile = path.join(dataDir, 'whitespace.xer');
            fs.writeFileSync(whitespaceFile, '  \n\t\r\n  ');

            const parser = new XerParser();
            const data = await parser.parse(whitespaceFile);
            
            expect(data.tables).toHaveLength(0);
            expect(data.header).toBeUndefined();

            // Cleanup
            fs.unlinkSync(whitespaceFile);
        });
    });

    describe('encoding detection', () => {
        it('should handle UTF-8 special characters', async () => {
            const parser = new XerParser();
            const data = await parser.parse(encodingsFile);
            
            const specialChars = data.tables.find(t => t.name === 'SPECIAL_CHARS');
            expect(specialChars).toBeDefined();
            expect(specialChars?.rows[0].description).toBe('Project résumé');
            expect(specialChars?.rows[1].description).toBe('über den Büros');
        });

        it('should handle mixed encodings', async () => {
            const parser = new XerParser();
            const data = await parser.parse(encodingsFile);
            
            const mixedEncodings = data.tables.find(t => t.name === 'MIXED_ENCODINGS');
            expect(mixedEncodings).toBeDefined();
            expect(mixedEncodings?.rows[0].name).toBe('João');
            expect(mixedEncodings?.rows[3].name).toBe('Σωκράτης');
        });

        it('should handle extended ASCII characters', async () => {
            const parser = new XerParser();
            const data = await parser.parse(encodingsFile);
            
            const extendedAscii = data.tables.find(t => t.name === 'EXTENDED_ASCII');
            expect(extendedAscii).toBeDefined();
            expect(extendedAscii?.rows.map(r => r.symbol)).toEqual(['±', '©', '®', '°', 'µ']);
        });

        it('should handle control characters', async () => {
            const parser = new XerParser();
            const data = await parser.parse(encodingsFile);
            
            const controlChars = data.tables.find(t => t.name === 'CONTROL_CHARS');
            expect(controlChars).toBeDefined();
            expect(controlChars?.rows[0].name).toBe('Test\\tTab');
            expect(controlChars?.rows[0].notes).toBe('Note\\nNewline');
        });
    });

    describe('parse comprehensive data', () => {
        it('should parse project information correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            
            const project = data.tables.find(t => t.name === 'PROJECT');
            expect(project).toBeDefined();
            expect(project?.rows[0]).toEqual({
                proj_id: '1000',
                proj_short_name: 'TEST_PROJ',
                start_date: '2024-01-01',
                finish_date: '2024-12-31',
                last_recalc_date: '2024-01-15',
                plan_start_date: '2024-01-01',
                plan_end_date: '2024-12-31',
                currency_id: 'USD'
            });
        });

        it('should parse task relationships correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            
            const tasks = data.tables.find(t => t.name === 'TASK');
            const taskPreds = data.tables.find(t => t.name === 'TASKPRED');
            
            expect(tasks).toBeDefined();
            expect(taskPreds).toBeDefined();
            expect(tasks?.rows).toHaveLength(5);
            expect(taskPreds?.rows).toHaveLength(4);
            
            // Verify task chain: Start -> Planning -> Design -> Implementation -> End
            const preds = taskPreds?.rows || [];
            expect(preds[0]).toMatchObject({
                pred_task_id: '1000',
                task_id: '1001',
                pred_type: 'FS'
            });
            expect(preds[3]).toMatchObject({
                pred_task_id: '1003',
                task_id: '1004',
                pred_type: 'FS'
            });
        });

        it('should parse resource assignments correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            
            const resources = data.tables.find(t => t.name === 'RSRC');
            const assignments = data.tables.find(t => t.name === 'TASKRSRC');
            
            expect(resources).toBeDefined();
            expect(assignments).toBeDefined();
            
            // Verify resource costs
            const jsmith = resources?.rows.find(r => r.rsrc_short_name === 'JSMITH');
            expect(jsmith?.cost_per_qty).toBe('150.00');
            
            // Verify assignment costs
            const designAssignment = assignments?.rows.find(a => a.task_id === '1002');
            expect(designAssignment?.target_cost).toBe('38400.00');
        });

        it('should parse WBS structure correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            
            const wbs = data.tables.find(t => t.name === 'PROJWBS');
            expect(wbs).toBeDefined();
            
            const level1 = wbs?.rows.find(w => w.wbs_short_name === 'L1');
            const planning = wbs?.rows.find(w => w.wbs_short_name === 'L1.1');
            
            expect(level1?.parent_wbs_id).toBe('');
            expect(planning?.parent_wbs_id).toBe('100');
        });
    });

    describe('parse malformed data', () => {
        it('should handle missing columns gracefully', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const tasks = data.tables.find(t => t.name === 'TASK');
            const incompleteRow = tasks?.rows.find(r => r.task_id === 'Missing columns');
            
            expect(incompleteRow).toBeDefined();
            expect(incompleteRow?.task_name).toBe('');
            expect(incompleteRow?.start_date).toBe('');
            expect(incompleteRow?.duration).toBe('');
        });

        it('should handle extra columns gracefully', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const tasks = data.tables.find(t => t.name === 'TASK');
            const task = tasks?.rows.find(r => r.task_id === '1000');
            
            expect(task).toBeDefined();
            expect(Object.keys(task || {})).toHaveLength(4); // Only defined fields
        });

        it('should handle tables without field definitions', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const noFields = data.tables.find(t => t.name === 'TABLE_WITHOUT_FIELDS');
            expect(noFields?.rows).toHaveLength(0);
        });

        it('should handle empty tables', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const emptyTable = data.tables.find(t => t.name === 'EMPTY_TABLE');
            expect(emptyTable?.fields).toHaveLength(3);
            expect(emptyTable?.rows).toHaveLength(0);
        });

        it('should handle duplicate field names', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const dupFields = data.tables.find(t => t.name === 'DUPLICATE_FIELDS');
            expect(dupFields?.fields).toHaveLength(3);
            expect(dupFields?.rows[0].field1).toBeDefined();
        });

        it('should handle invalid numeric values', async () => {
            const parser = new XerParser();
            const data = await parser.parse(malformedFile);
            
            const calendar = data.tables.find(t => t.name === 'CALENDAR');
            const invalidRow = calendar?.rows.find(r => r.clndr_id === '2');
            
            expect(invalidRow?.day_hr_cnt).toBe('invalid');
        });
    });

    describe('parse header data', () => {
        it('should parse ERMHDR information correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            
            expect(data.header).toBeDefined();
            expect(data.header).toMatchObject({
                version: '24.8',
                date: '2024-09-08',
                project: 'Project',
                id: 'test',
                user: 'firstname lastname',
                database: 'dbxDatabaseNoName',
                system: 'Project Management Cloud',
                currency: 'USD'
            });
        });

        it('should handle missing ERMHDR gracefully', async () => {
            // Create a file without ERMHDR
            const noHeaderFile = path.join(dataDir, 'no_header.xer');
            fs.writeFileSync(noHeaderFile, `%T\tPROJECT\n%F\tproj_id\n%R\t1\n%E`);

            const parser = new XerParser();
            const data = await parser.parse(noHeaderFile);
            
            expect(data.header).toBeUndefined();

            // Cleanup
            fs.unlinkSync(noHeaderFile);
        });

        it('should handle malformed ERMHDR gracefully', async () => {
            // Create a file with malformed ERMHDR
            const malformedHeaderFile = path.join(dataDir, 'malformed_header.xer');
            fs.writeFileSync(malformedHeaderFile, `ERMHDR\tinvalid\n%T\tPROJECT\n%F\tproj_id\n%R\t1\n%E`);

            const parser = new XerParser();
            const data = await parser.parse(malformedHeaderFile);
            
            expect(data.header).toBeUndefined();

            // Cleanup
            fs.unlinkSync(malformedHeaderFile);
        });
    });

    describe('xlsx export', () => {
        const outputDir = path.join(dataDir, 'output');

        beforeAll(() => {
            // Create output directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }
        });

        afterAll(() => {
            // Clean up output directory
            if (fs.existsSync(outputDir)) {
                fs.rmSync(outputDir, { recursive: true });
            }
        });

        it('should export data to xlsx format correctly', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            const outputPath = path.join(outputDir, 'test_output.xlsx');

            await parser.exportToXlsx(data, { outputPath });

            // Verify the file was created
            expect(fs.existsSync(outputPath)).toBe(true);

            // Read the exported file
            const workbook = XLSX.readFile(outputPath);

            // Verify header sheet
            expect(workbook.SheetNames).toContain('Header');
            const headerSheet = workbook.Sheets['Header'];
            const headerData = XLSX.utils.sheet_to_json(headerSheet);
            expect(headerData).toContainEqual({
                Field: 'Version',
                Value: '24.8'
            });
            expect(headerData).toContainEqual({
                Field: 'Project',
                Value: 'Project'
            });

            // Verify all tables are present
            data.tables.forEach(table => {
                expect(workbook.SheetNames).toContain(table.name);
                const sheet = workbook.Sheets[table.name];
                const sheetData = XLSX.utils.sheet_to_json(sheet);
                expect(sheetData).toHaveLength(table.rows.length);
            });
        });

        it('should use sheet name prefix when provided', async () => {
            const parser = new XerParser();
            const data = await parser.parse(comprehensiveFile);
            const outputPath = path.join(outputDir, 'prefixed_output.xlsx');
            const prefix = 'TEST';

            await parser.exportToXlsx(data, { 
                outputPath,
                sheetNamePrefix: prefix
            });

            // Read the exported file
            const workbook = XLSX.readFile(outputPath);

            // Header sheet should not have prefix
            expect(workbook.SheetNames).toContain('Header');

            // All other sheets should have prefix
            data.tables.forEach(table => {
                const expectedName = `${prefix}_${table.name}`.substring(0, 31);
                expect(workbook.SheetNames).toContain(expectedName);
            });
        });

        it('should handle empty data gracefully', async () => {
            const parser = new XerParser();
            const emptyData = { tables: [], header: undefined };
            const outputPath = path.join(outputDir, 'empty_output.xlsx');

            await parser.exportToXlsx(emptyData, { outputPath });

            // Verify the file was created
            expect(fs.existsSync(outputPath)).toBe(true);

            // Read the exported file
            const workbook = XLSX.readFile(outputPath);
            expect(workbook.SheetNames).toHaveLength(1);
            expect(workbook.SheetNames[0]).toBe('Empty');
        });

        it('should truncate long sheet names to 31 characters', async () => {
            const parser = new XerParser();
            const longNameData = {
                tables: [{
                    name: 'ThisIsAReallyLongTableNameThatShouldBeTruncated',
                    fields: ['field1'],
                    rows: [{ field1: 'value1' }]
                }],
                header: undefined
            };
            const outputPath = path.join(outputDir, 'long_names_output.xlsx');

            await parser.exportToXlsx(longNameData, { outputPath });

            // Read the exported file
            const workbook = XLSX.readFile(outputPath);
            expect(workbook.SheetNames[0].length).toBeLessThanOrEqual(31);
            expect(workbook.SheetNames[0]).toBe('ThisIsAReallyLongTableNameThatS');
        });
    });
}); 