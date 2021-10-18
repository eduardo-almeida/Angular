function rand(min=0, max=3000){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
function f1(callback){
    setTimeout(function(){
        console.log('F1');
        if(callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
    console.log('F2');
    if(callback) callback();
}, rand());
}

function f3(callback){
    setTimeout(function(){
    console.log('F3');
    if(callback) callback();
}, rand());
}

f1(function(){
    f2(function(){
        f3(function(){    
            console.log("Ola Mundo")
        });
    }); 
});