const http = require('http')
const url = require('url')

// PETICIONES
//http://localhost:8080/
//http://localhost:8080/

const server = http.createServer((req, res) =>{

    const urlObject = url.parse(req.url)
    const path = urlObject.path
    // const pathName = ur      lObject.pathname    
    console.log(`Este es mi path: ${path}`)

    let status = 0
    let responseStr = ''
    let mimeType = {'Content-Type' : 'application/json'}

    if (path === '/') {
        responseStr = {message: 'OK'}
        status = 200
    }else if (path === '/permisos'){
        responseStr = {message: 'Forbidden'}
        status = 403
    }else if (path === '/loquesea.txt') {
        responseStr = {message: 'Request Time out'}
        status = 408
    }else{
        responseStr = {message: 'Not Found'}
        status = 404
    }

    const responseStrinify = JSON.stringify(responseStr)

    res.writeHead(status, mimeType)
    res.write(responseStrinify)
    res.end()

})
server.listen(8080)
console.log('Servidor iniciado')