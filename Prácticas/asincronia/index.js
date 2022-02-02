// console.log('1 Inicio')
// console.log('2 Ejecutando')
// console.log('3 Terminado');

// const { resolve } = require("path/posix")


//Ejecucion que toma tiempo siempre va al event queue
/*
console.log('1 Inicio')
setTimeout( () => {
console.log('2 Ejecutando')
}, 0000)
console.log('3 Terminado');
*/


//Solución 1 callbacks (NO ES RECOMENDADA por callbackhell)
/*
function run () {
    console.log('1 Inicio')
    myFunction(ejecutando)
    console.log('4 Fin');
}

function myFunction (ejecutando) {
    setTimeout( () => {
        console.log('2 Ejecutando');
        ejecutando()
    },0000)
}

function ejecutando () {
    console.log('3 Terminando');
}

run()
*/

//Solución 2 promesas
/*
Promise: Algo que va a ocurrir pero no sabemos cuando va a ocurrir.
Estados de las promesas:Pendiente (pending), resuelto, (resolve) y rechazado (reject)
*/

function asincrona () {
    return new Promise((response, reject) => {
        setTimeout(() =>{
            console.log('2 Ejecutando')
                response()
            // reject(new Error ('my custom error'))
        },1000)
    }) 
}

console.log('1 Inicio')
asincrona().then(() => {
    console.log('3 Terminado')
}).catch(err => console.log('error: ', err))
.finally(() =>{
    //Se ejecuta siempre, tanto si la promesa se resuelve o no
    console.log('4 fin'); 
    console.log('en el finally');
})