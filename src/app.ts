
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

const writeToFile = ( location: string, content: string ): void => {
    const fs = require('fs');

    try {
        fs.writeFileSync(location, content);
    } catch (err) {
        console.log(err);
    }
};

const tableX = multiplicationTable( 5 );
console.log(tableX);
writeToFile( 'outputs/tabla-5.txt', tableX );
