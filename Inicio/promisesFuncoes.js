function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Valor Invalido'); 
            return
        } 
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    });    
}

const promisses = [
    //'Valor inicial',
    esperaAi('Promises 1',  aleatorio(0, 3)),
    esperaAi('Promises 2',  aleatorio(0, 3)),
    esperaAi('Promises 3',  aleatorio(0, 3)),
    //esperaAi(123, 3000),
    //'Valor final'
]

/*
//Resolve todos e devolve os valores
Promise.all(promisses)
.then(valor => {
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})
*/

/*
//Devolve o primeiro que ficar pronto
Promise.race(promisses)
.then(valor => {
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})
*/
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi("Baixei a página", 3000)
    }
}

baixaPagina()
.then(dados => {
    console.log(dados)
})
.catch(e => console.log(e))
