const fs = require('node:fs')

console.log('leyendo el primer archivo... ')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto . ', text)
console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo ...')
const secondeText = fs.readFileSync('./archivo2.txt', 'utf-8') // asincrono 

console.log('segundo archivo: ', secondeText)
