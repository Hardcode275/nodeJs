const http = require('node:http')

const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log ('request received')
    res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => { // al utilizar el puerto cero te ayudara a que este automaticamente busque un puerto disponible
        console.log(`server listening on port http://localhost:${port}`)
    })
})
