function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor Invalido')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    });    
}

esperaAi('Conexão com Banco de dados', aleatorio(0, 3000))
.then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando base de dados', aleatorio(0, 3000))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando base de dados', aleatorio(0, 3000))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi(22222, aleatorio(0, 3000))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Exibindo dados', aleatorio(0, 3000))
})
.then(resposta => {
    console.log(resposta)
})
.catch(e => {
    console.log("Erro:", e)
})
