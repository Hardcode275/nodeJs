const fs = require('node:fs')
const { text } = require('node:stream/consumers')

console.log('leyendo el primer archivo... ')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=> { 
    console.log('primer texto:', text)

}) // readFileSync es la manera de poder hacerlo asincrono y sincrono  usa readFile normal pero lleva un colbat


console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo ...')
// const secondeText = fs.readFile('./archivo2.txt', 'utf-8') // asincrono 

fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{ // sincrono 
    console.log('segundo texto:', text)
})

