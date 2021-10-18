function soma(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('A e B tem que ser numero');
    }
    return a + b;
}

try{
    try{
        console.log("Outra coisa");
    } catch (error){
        console.log('Outro erro');
    } finally {
        console.log("também sera executado")
    }
    console.log(soma('12', 3));
} catch (error){
    //console.log(error)
    console.log("alguma coisa amigavel")
} finally {
    console.log("sempre é executado")
}