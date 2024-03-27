import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('ServerApp', () => {

    const options = {
        base: 8,
        limit: 12,
        showTable: false,
        name: 'test-name',
        destination: 'outputs/test-path'
    }

    test('should create ServerApp instance', () => {
        
        const objServerApp = new ServerApp();

        expect( objServerApp ).toBeInstanceOf( ServerApp );
        expect( typeof ServerApp.run ).toBe( 'function' );

    });

    test('should run ServerApp with options', () => {

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run( options );

        expect( logSpy ).toHaveBeenCalledTimes( 3 );
        expect( logSpy ).toHaveBeenCalledWith( 'Server running...' );
        expect( logSpy ).toHaveBeenLastCalledWith( 'File created! :)' );

        expect( createTableSpy ).toHaveBeenCalledTimes( 1 );
        expect( createTableSpy ).toHaveBeenCalledWith({
            base: options.base, limit: options.limit
        });

        expect( saveFileSpy ).toHaveBeenCalledTimes( 1 );
        expect( saveFileSpy ).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            filePath: options.destination,
            fileName: options.name
        });

    });

});
