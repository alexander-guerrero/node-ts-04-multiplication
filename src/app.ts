import { yarg } from "./config/plugins/argv.plugin";

// "argv" por defecto 
console.log('"argv" por defecto: ', process.argv);

// "argv" de yargs 
console.log('"argv" de yargs: ', yarg);
console.log('El valor de "b" es: ', yarg.b);
