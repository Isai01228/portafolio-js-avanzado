const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    const urlObject = url.parse(req.url)
    console.log(`path: ${urlObject.path}`)
    console.log(`pathname: ${urlObject.pathname}`)
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(`<html><body>!Hola desde node</body></html>`)
    res.end()
})

server.listen(8080)
console.log('Servidor iniciado')