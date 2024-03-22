import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe('SaveFileUseCase', () => {

    let outputPath = 'outputs/table.txt';

    // Ciclo de vida de las pruebas (Jest Lifecycle) 
    // beforeAll, beforeEach, afterEach, afterAll 
    afterEach(() => {
        // console.log('outputPath', outputPath);
        fs.rmSync(outputPath, { recursive: true });
    });
    
    test('should save file with default values', () => {

        const objSaveFile = new SaveFile();
        const options = {
            fileContent: 'test content'
        }

        const result = objSaveFile.execute(options);
        const fileExists = fs.existsSync(outputPath);
        // console.log(fileExists);
        const fileContent = fs.readFileSync(outputPath, { encoding: 'utf-8' });
        // console.log(fileContent);

        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );

    });

    test('should save file with custom values', () => {

        const objSaveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            filePath: 'outputs/my/custom/path',
            fileName: 'my-custom-name'
        }
        outputPath = `${options.filePath}/${options.fileName}.txt`;
        
        const result = objSaveFile.execute(options);
        const fileExists = fs.existsSync(outputPath);
        // console.log(fileExists);
        const fileContent = fs.readFileSync(outputPath, { encoding: 'utf-8' });
        // console.log(fileContent);

        expect( result ).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );
        
    });

});
