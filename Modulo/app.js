/*
const mod1 = require("./mod1") 
console.log(mod1.nomeCompleto())
*/

/*
const mod1 = require("./mod1").nomeCompleto
console.log(mod1())
*/

/*
const mod1 = require("./mod1")
const falaNome = mod1.nomeCompleto
console.log(falaNome())
*/

const {nome, sobrenome, nomeCompleto} = require("./mod1")
console.log(nomeCompleto())