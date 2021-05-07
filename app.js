//const { argv, option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicarConAsync');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(argv);

//console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
    

