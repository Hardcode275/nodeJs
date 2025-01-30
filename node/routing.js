const http = require('node:http')

//commonsJS -> modulos clasicos de node si funconan los json directamente.
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const {method, url} = req

    switch(method){
        case 'GET':
            switch(url){
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json ; charset=utf-8' )
                    return res.end(JSON.stringify(dittoJSON)) // se utiliza JSON.stringify para convertir un objeto a un string, pero es necesario esto no solo se puede pasar el json en si 
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('Not found')
            }
        

        case 'POST':
            switch (url){
                case '/pokemon':{
                    let body = ''
                   
                    // escuchar el evento de data
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })
                    // un chunk es un fragmento de la informacion que se envia
                    req.on('end', ()=>{
                        const data = JSON.parse(body)
                        //llamar a la base de datos para obtener la info.
                        res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'}) // 201 se utiliza o se entiende es cuando ya se a guardado el recurso
                        data.timestamp = Date.now()
                        res.end(JSON.stringify(data))                           
                    })

                    break;
                }

                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    return res.end('404 Not found')
            }  

    }

}

const server = http.createServer(processRequest)

server.listen(1234, () => {
console.log('server listening on port http://localhost:1234')
})