// process.argv = ['node', 'app.ts', '-b', '10'];
// import './app';
// Primero agregar las variables en argv, y luego importar. Funciona, pero se verá otra forma :) 

import { ServerApp } from "./presentation/server-app";

describe('Test app.ts', () => {
    
    test('should call ServerApp.run with values', async () => {

        // Arrange 
        const serverAppRunMock = jest.fn();
        ServerApp.run = serverAppRunMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'outputs/test-path'];
        
        // Act 
        await import('./app');

        // Assert 
        expect( serverAppRunMock ).toHaveBeenCalledWith({
            base: 10, 
            limit: 5, 
            showTable: true, 
            name: 'test-file', 
            destination: 'outputs/test-path'
        });

    });

});
