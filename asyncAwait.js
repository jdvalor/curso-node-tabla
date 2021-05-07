//const { resolve } = require("node:path");

function descargarClientes() {

    return new Promise((resolve, reject) => {

        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de clientes se descargo correctamente')
            } else{
                reject('Error de conexión');
            }
        }, 3000);
    })

}

// Async Await - Function DECLARATION
/*async function ejecutar() {
    try {
        console.log(1+1); //esto se ejecuta inmediatamente
        const respuesta = await descargarClientes();
        console.log(2+2); //esto se ejecuta recién cuando finaliza el await
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
*/
// Async Await - Function EXPRESSION
const ejecutar = async () => {
    try {
        console.log(1+1); //esto se ejecuta inmediatamente
        const respuesta = await descargarClientes();
        console.log(2+2); //esto se ejecuta recién cuando finaliza el await
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();
