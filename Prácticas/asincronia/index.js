// console.log('1 Inicio')
// console.log('2 Ejecutando')
// console.log('3 Terminado');


//Ejecucion que toma tiempo siempre va al event queue
/*
console.log('1 Inicio')
setTimeout( () => {
console.log('2 Ejecutando')
}, 0000)
console.log('3 Terminado');
*/


//Solución 1 callbacks (NO ES RECOMENDADA por callbackhell)
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