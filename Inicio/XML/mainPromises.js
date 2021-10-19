const requisicao = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        
        xhr.addEventListener('load', () => {
                if (200 <= xhr.status < 300 ){
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.statusText)
                }
            });
    })
}

document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase();

    if( tag === 'a'){
        e.preventDefault()
        carregaPagina(elemento)
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href');
    const objetoConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await requisicao(objetoConfig);
        carregaResultado(response)
    } catch(e) {
        console.log("Error ", e)
    }

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}