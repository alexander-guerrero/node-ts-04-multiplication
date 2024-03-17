
// Se crea la "interface" (son reglas que el objeto tiene que cumplir) 
interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI - Dependency Injection
         */
    ) {}

    execute({ base, limit = 10 }: CreateTableOptions) {

        let res: string = '';

        res += '=================\n';
        res += `   Tabla del ${base}   \n`;
        res += '=================\n\n';
    
        for (let i = 1; i <= limit; i++) {
            res += `${ base } x ${ i } = ${ base * i }\n`;
        }
    
        return res;
    }

}
