function aleatorio(min = 0, max = 3){
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

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi("Baixei a página", aleatorio(0, 3))
    }
}
/*
esperaAi('Promises 1',  aleatorio())
.then(valor => {console.log(valor);
return esperaAi('Promises 2',  aleatorio())
})
.then(fase => console.log(fase))
.catch(e => console.log(e))
*/

async function executa(){
    try{
        const fase1 = await esperaAi('Promises 1',  aleatorio())
        console.log(fase1)
        const fase2 = await esperaAi(2,  aleatorio())
        console.log(fase2)
        const fase3 = await esperaAi('Promises 3',  aleatorio())
        console.log(fase3)
        console.log("Terminamos na ",fase3)
    } catch(e){
        console.log(e)
    }
}


executa()