const souUmdado = function(){
    console.log("Sou um dado");
}

function executaFuncao(funcao){
    console.log("Executando funcao a baixo");
    funcao();
}

executaFuncao(souUmdado);

// Arror function

const funcaoArrow = () => {
    console.log("Sou uma function Arrow");
};

funcaoArrow();