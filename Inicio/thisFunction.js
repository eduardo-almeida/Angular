function criarPessoas(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} esta ${assunto}`;
        }
    }
}

const p1 = criarPessoas('Eduardo', 'Almeida');
console.log(p1.fala("falando"));