 // node js es monohilo solo tiene un proceso y se basa en procesos. 
 const fs = require('node:fs')

 const stats = fs.statSync('./archivo.txt')
// sincrono
 console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), // si es un directorio 
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamaño en bytes

 )