import fs from "fs";

interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

interface Options {
    fileContent: string;
    filePath?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    
    constructor(
        /**
         * repository: StorageRepository
         */
    ) {}

    execute({
        fileContent,
        filePath = 'outputs',
        fileName = 'table'
    }: Options): boolean {
        
        try {
            fs.mkdirSync(filePath, { recursive: true });
            const outputPath: string = `${ filePath }/${ fileName }.txt`;
            fs.writeFileSync(outputPath, fileContent);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

}