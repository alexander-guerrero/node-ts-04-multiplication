import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {

    static run(options: RunOptions) {

        console.log('Server running...');
        console.log({ options });

        const { base, limit, showTable, name, destination } = options;
        const objCreateTable = new CreateTable();
        const table = objCreateTable.execute({ base, limit });

        if ( showTable ) console.log(table);

        const objSaveFile = new SaveFile();
        const wasCreated = objSaveFile.execute({ 
            fileContent: table,
            filePath: destination,
            fileName: name
        });

        ( wasCreated ) 
            ? console.log('File created! :)') 
            : console.error('File not created! :(');
        
    }

}
