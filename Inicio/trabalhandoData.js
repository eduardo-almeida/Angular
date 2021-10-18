function retornoData(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando data");
    }
    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        seconde: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1977 12:45:12');
    const hora = retornoData(data);
    console.log(hora);
} catch(e){

} finally{
    console.log("Tenha um bom dia");
}
//console.log(retornoData('12'));