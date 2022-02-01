const operations = require('./function')

function main () {

    let numero1 = 10
    let numero2 = 2

    const resSuma = operations.sum(numero1, numero2)
    const resSubstract = operations.substract(numero1, numero2)
    const resMultiply = operations.multiply(numero1, numero2)
    const resDivide = operations.divide(numero1, numero2)

    console.log(`resSuma ${resSuma}`)
    console.log(`resSuma ${resSubstract}`)
    console.log(`resSuma ${resMultiply}`)
    console.log(`resSuma ${resDivide}`)
}

main()