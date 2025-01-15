const { readFile } = require ('node:fs/promises'); //recrdar punto y como al hacer este tipo de asincrono, porque sino aqui se queda
//IIFE - Inmeddiatly Invoke Function Expression
(
    async() => {
        console.log('leyendo el primer archivo... ')
const text = await readFile('./archivo.txt', 'utf-8',)

    console.log('primer texto: ', text)



console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo ...')
// const secondeText = fs.readFile('./archivo2.txt', 'utf-8') // asincrono 

const secondeText = await readFile('./archivo2.txt', 'utf-8',)

    console.log('segundo texto. ', secondeText)


    }
)()


// es lo mismo que hacer esto que es mas sencillo 

/* async function init(){
    console.log('leyendo el primer archivo... ')
const text = await readFile('./archivo.txt', 'utf-8',)

    console.log('primer texto: ', text)



console.log('hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo ...')
// const secondeText = fs.readFile('./archivo2.txt', 'utf-8') // asincrono 

const secondeText = await readFile('./archivo2.txt', 'utf-8',)

    console.log('segundo texto. ', secondeText)


}
init() */


