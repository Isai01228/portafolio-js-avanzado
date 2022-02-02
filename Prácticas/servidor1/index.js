const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(`<html><body>!Hola desde node</body></html>`)
    res.end()
})

server.listen(8000)

console.log('Servidor iniciado');