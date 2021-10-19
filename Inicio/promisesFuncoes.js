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
Promise.all(promisses)
.then(valor => {
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})
*/

Promise.race(promisses)
.then(valor => {
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})