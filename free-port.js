const { rejects } = require('node:assert')
const net = require('node:net')

function findAvailablePort(desiredPort){
    return new Promise((resolve, reflect) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })
        server.on('error', (err) => {
            if (err.code == 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                rejects(err)
            }
        })
    })
}

module.exports = { findAvailablePort }