const fs = require('node:fs/promises')
// const {promisify} = require('node:until') // esta es otra forma si no esta arriba y uno quiere ocupar promesas. 
//const readFIlePromise = promisify (fs.readFile)  // esto crea la version de promesas y esto se utiliza en fs. readFilePromise y se hace la promesa como esta establecido, esto solo en modulos nativos que no tienen promesa

console.log('leyendo el primer archivo... ')
fs.readFile('./archivo.txt', 'utf-8',)
.then(text => {
    console.log('primer texto: ', text)
}) // readFileSync es la manera de poder hacerlo asincrono y sincrono  usa readFile normal pero lleva un colbat


console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo ...')
// const secondeText = fs.readFile('./archivo2.txt', 'utf-8') // asincrono 

fs.readFile('./archivo2.txt', 'utf-8',)
.then(text=> {
    console.log('segundo texto. ', text)
}

)
