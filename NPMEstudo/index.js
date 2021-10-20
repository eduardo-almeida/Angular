const fs = require('fs').promises
const path = require('path')

fs.readdir(path.resolve(__dirname))
.then(arquivos => console.log(arquivos))
.catch(e => console.log(e))