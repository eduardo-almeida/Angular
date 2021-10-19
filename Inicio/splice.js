const nomes = ['Eduardo', 'Maria', 'Joana', 'Pedro', 'João']
//const removidos = nomes.splice(-3, Number.MAX_VALUE);
const removidos = nomes.splice(2, 2, 'Luiz');
console.log(nomes)
console.log(removidos)