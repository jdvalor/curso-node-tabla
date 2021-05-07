const fs = require('fs');
//const { resolve } = require('node:path');

const crearArchivo = base => {

    return new Promise( (resolve, reject) => {

        let salida = '';

        for(let i=1; i<=10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        /* ** whriteFile
        fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`);
        } )
        */
    
        console.log(salida);
    
        fs.writeFileSync( `tabla-${base}.txt`, salida);
    
        resolve(`tabla-${base}.txt`);
    
        
    } )


}

module.exports = {
    crearArchivo
}

