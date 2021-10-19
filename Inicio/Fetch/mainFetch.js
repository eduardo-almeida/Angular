document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase();

    if( tag === 'a'){
        e.preventDefault()
        carregaPagina(elemento)
    }
})

async function carregaPagina(el){
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Error 404 Nosso')
        
        const html = await response.text()
        carregaResultado(html)
    } catch (e){
        console.log(e)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}