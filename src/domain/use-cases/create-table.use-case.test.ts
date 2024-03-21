import { CreateTable } from "./create-table.use-case";

describe('CreateTableUseCase', () => {
    
    test('should create table with default values', () => {
        
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 3 });
        const rows = table.match(/x/g)?.length; // cuento los símbolos "x" 

        // console.log(table);
        // console.log(rows);

        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('3 x 1 = 3');
        expect( table ).toContain('3 x 10 = 30');
        expect( rows ).toBe(10);

    });

    test('should create table with custom values', () => {
        
        const options = {
            base: 3,
            limit: 20
        }

        const createTable = new CreateTable();
        const table = createTable.execute( options );
        const rows = table.match(/x/g)?.length; // cuento los símbolos "x" 

        // console.log(table);
        // console.log(rows);

        expect( table ).toContain(`${options.base} x ${options.limit} = ${options.base * options.limit}`);
        expect( rows ).toBe( options.limit );

    });

});
