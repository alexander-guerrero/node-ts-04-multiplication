import { ServerApp } from "./server-app";

describe('ServerApp', () => {
    
    test('should create ServerApp instance', () => {
        
        const objServerApp = new ServerApp();

        expect( objServerApp ).toBeInstanceOf( ServerApp );
        expect( typeof ServerApp.run ).toBe( 'function' );

    });

});
