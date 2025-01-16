const path = require('node:path')

//barra separadora de carpetas segun sistema operativo
console.log(path.sep)

//unir rutas con path join 

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// da el nombre del fichero
const base = path.basename('/tmp/hr-secret-files/password.txt')
console.log(base)

// da el nombre del fichero pero se le dice que quite el txt 
const filenae = path.basename('/tmp/hr-secret-files/password.txt', 'txt')
console.log(filenae)

// este ofrece y da la extension 
const extension = path.extname('image.jpa')
console.log(extension)






