const numeros = [50, 12, 4, 3, 5, 99, 84, 1, 2, 3, 4]
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)

console.log(numerosPares)