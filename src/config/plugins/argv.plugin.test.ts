// import { yarg } from "./argv.plugin";

const runCommand = async ( args: string[] ) => {
    process.argv = [ ...process.argv, ...args ];
    
    const { yarg } = await import('./argv.plugin');
    // console.log('yarg', yarg);
    return yarg;
}

describe('Test argv.plugin.ts', () => {
    
    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test('should return default values', async () => {
        
        const argv = await runCommand( ['-b', '5'] );

        // console.log('process.argv', process.argv);
        // console.log('argv', argv);

        expect( argv ).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }) );
        
    });

    test('should return configuration with custom values', async () => {
        
        const argv = await runCommand( ['-b', '7', '-l', '12', '-s', 'true', '-n', 'custom-name', '-d', 'outputs/custom-path'] );

        // console.log('process.argv t2', process.argv);
        // console.log('argv t2', argv);

        expect( argv ).toEqual( expect.objectContaining({
            b: 7,
            l: 12,
            s: true,
            n: 'custom-name',
            d: 'outputs/custom-path'
        }) );

    });

});
