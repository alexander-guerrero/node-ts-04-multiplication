// import { yarg } from "./argv.plugin";

const runCommand = async ( args: string[] ) => {
    process.argv = [ ...process.argv, ...args ];
    
    const { yarg } = await import('./argv.plugin');
    // console.log('yarg', yarg);
    return yarg;
}

describe('Test argv.plugin.ts', () => {
    
    test('should return default values', async () => {
        
        const argv = await runCommand( ['-b', '5'] );

        // console.log('process.argv', process.argv);
        console.log('argv', argv);
        
        expect( argv ).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }) );
        
    });

});
