function criarPessoas(nome, sobrenome){
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(novNome){
            novNome = novNome.split(' ');
            this.nome = novNome.shift();
            this.sobrenome = novNome.join(' ')
            console.log(novNome);
        },
        fala(assunto){
            return `${this.nome} esta ${assunto}`;
        }
    }
}

const p1 = criarPessoas('Eduardo', 'Almeida');
console.log(p1.fala("falando"));
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Maria Joao Fernandes"
console.log(p1.sobrenome);