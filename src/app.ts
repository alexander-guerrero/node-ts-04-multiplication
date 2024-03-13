import { yarg } from "./config/plugins/argv.plugin";
import { ServerApp } from "./presentation/server-app";

// // "argv" por defecto 
// console.log('"argv" por defecto: ', process.argv);

// // "argv" de yargs 
// console.log('"argv" de yargs: ', yarg);
// console.log('El valor de "b" es: ', yarg.b);

(async () => {
    await main();
})();

async function main() {

    // console.log(yarg);
    const { b:base, l:limit, s:showTable } = yarg;
    
    ServerApp.run({ base, limit, showTable });

}
