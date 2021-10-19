class Pessoas {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }

    comer(){

    }

    beber(){

    }
}

const p1 = new Pessoas("Eduardo", "Almeida")

console.log(p1)