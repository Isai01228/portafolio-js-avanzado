const http = require('http')
const url = require('url')

const server = http.createServer((req, res) =>{
    const urlObject = url.parse(req.url)
    const path = urlObject.path
    const pathName = urlObject.pathname
    console.log(`Path: ${path} - pathName: ${pathName}`)

    //Validacion de path solicitado
    //1. OK
    //2. No tener permisos
})

server.listen(8080)
console.log('Servidor iniciado')