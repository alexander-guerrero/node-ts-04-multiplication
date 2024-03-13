import fs from 'fs';
import { yarg } from './config/plugins/argv.plugin';

// Tarea 
// utilizar "yargs" para integrarlo con la tabla de multiplicación 
// basado en los parámetros que se envían por consola (base, limit, show) 

// Mi solución 
// Extraer los valores del objeto "yarg" y enviarlos donde correspondan :) 
// console.log('yarg', yarg);
const { b:base, l:limit, s:show } = yarg;
// console.log('base', base); // obligatorio 
// console.log('limit', limit); // tiene valor por defecto 
// console.log('show', show); // tiene valor por defecto 

const multiplicationTable = ( num: number, length: number ): string => {

    let res: string = '';

    res += '=================\n';
    res += `   Tabla del ${num}   \n`;
    res += '=================\n\n';

    for (let i = 1; i <= length; i++) {
        res += `${ num } x ${ i } = ${ num * i }\n`;
    }

    if ( show ) console.log(res);

    return res;
};

const writeToFile = ( path: string, fileName: string, content: string ): void => {

    try {
        fs.mkdirSync(path, { recursive: true });
        const outputPath: string = `${ path }/${ fileName }`;
        fs.writeFileSync(outputPath, content);
        console.log('File created!');
    } catch (err) {
        console.log(err);
    }
};

const tableX = multiplicationTable( base, limit );

const outputPathTableX: string = 'outputs';
const fileNameTableX: string = `tabla-${ base }.txt`;
writeToFile( outputPathTableX, fileNameTableX, tableX );
