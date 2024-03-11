
console.log(process.argv);

const [ tsNode, app, ...args ] = process.argv;
console.log(args);
