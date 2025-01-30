const espresse = require('express');
const ditto = require('./pokemon/ditto.json')
const app = espresse();


const port = process.env.PORT ?? 1234;
app.disable('x-powered-by')

app.use(espresse.json()) //middleware para parsear el body de la request

/* app.use((req, res, next) => { //MIDDLEWARE se ejecuta entre la peticion y la respuesta
 if(req.method !== 'POST')return next()
 if(req.headers['content-type'] !== 'application/json') return next()

    let body = ''
                   
 // escuchar el evento de data
 req.on('data', chunk => {
     body += chunk.toString()
 })
 // un chunk es un fragmento de la informacion que se envia
 req.on('end', ()=>{
     const data = JSON.parse(body)
     //llamar a la base de datos para obtener la info.
     data.timestamp = Date.now()
     //mutar la request y meter la informacion en el req.body
        req.body = data
        next()

 })
     // si no tiene el next se queda estancado en el middleware
    //trakear la respuesta a la base de datos
    //    //revisar si el usuario tiene cookies
}) */

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    //deberia de guardar la informacion en la base de datos
res.status(201).json(req.body)                   
})

//la ultima ala que va a llegar es la que se va a ejecutar
app.use((req, res) => {
    res.status(404).send('Not found')
})

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})