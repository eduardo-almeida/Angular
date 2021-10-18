function retornoData(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoInterval(){
    console.log(retornoData());
}

setInterval(funcaoInterval, 500);