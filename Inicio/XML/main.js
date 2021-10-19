const requisicao = obj => {
    const xhr = new XMLHttpRequest();
    //xhr.open('GET', 'U', true);
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        //if (xhr.status >= 200 && xhr.status < 300){
        if (200 <= xhr.status < 300 ){
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText)
        }
    });
}

document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase();

    if( tag === 'a'){
        e.preventDefault()
        carregaPagina(elemento)
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href')
    requisicao({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log("Lalalalala")
            console.log(errorText)
        }

    })
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}