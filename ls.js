const fs = require('node:fs')
// esto hace que lea el directorio
fs.readdir('.', (err, files) => {   // en los colbalts el error siempre es el primer parametro 
    if (err) {
        console.error('error al leer el directorio: ', err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})