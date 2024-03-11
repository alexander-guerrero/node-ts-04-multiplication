import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .parseSync(); // En este caso será "síncrono", no se realizarán tareas "asíncronas" con los argumentos que se reciban 
