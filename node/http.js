/* npm run dev para poder utilizar nodemon para que se actualice automaticamente, 
en el package.json se agrega "dev": "nodemon http.js" recuerdar que solo se inicializo con npm init -y y 
luego se ocupo npm install nodemon -D pero en la carpeta node solo ahi se encuentra y en ningun otro lugar. no esta de forma global
 */
const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain', 'charset=utf-8') // utf-8 es un estandar de codificacion de caracteres
        res.end('Bienvenido a mi pagina de inicio ')
    }else if(req.url === '/imagen-super.png'){
        res.setHeader('Content-Type', 'image/png')
        fs.readFile('./images/paper.png', (err, data) => {
            if(err){
                res.statusCode = 500
                res.end('Internal server error')
            }else{
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })

        // buffer es una clase global de node que nos permite trabajar con datos binarios
    }else if(req.url === '/contacto'){
        res.statusCode = 200
        res.end('Contactanos en el 555-555-555')
    }else{
        res.statusCode = 404
        res.end('Pagina no encontrada')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})

//http siginifica hiper text transfer protocol transmite info especialmente paginas web 

//cuando tenemos una request de obtiendo la url, headers, los methods (Get), body
//cuando tenemos una response tenemos el status code, headers, body



//para abrir de forma sincronica la pagina para no ir recargando el servidor node --watch ./node/http.js  o  node --watch http.js







