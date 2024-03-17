import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp {

    static run(options: RunOptions) {

        console.log('Server running...');
        console.log({ options });

        const { base, limit, showTable } = options;
        const objCreateTable = new CreateTable();
        const table = objCreateTable.execute({ base, limit });

        if ( showTable ) console.log(table);
        
    }

}
