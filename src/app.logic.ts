import fs from 'fs';

// Tarea 
// tabla de multiplicar del 1 al 10 
// grabar en el archivo de salida 
// path: outputs/tabla-5.txt 

const multiplicationTable = ( num: number ): string => {

    let res: string = '';

    res += '=================\n';
    res += `   Tabla del ${num}   \n`;
    res += '=================\n\n';

    for (let i = 1; i <= 10; i++) {
        res += `${ num } x ${ i } = ${ num * i }\n`;
    }

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

const base: number = 6;
const tableX = multiplicationTable( base );
console.log(tableX);

const outputPathTableX: string = 'outputs';
const fileNameTableX: string = `tabla-${ base }.txt`;
writeToFile( outputPathTableX, fileNameTableX, tableX );
