function* geradora1(){
    //Codigo qualquer
    yield 'valor1';
    //Codigo qualquer
    yield 'valor2';
    //Codigo qualquer
    yield 'valor3';
}

const g1 = geradora1();
/*
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

for (let valor of g1){
    console.log(valor)
}
*/
function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
/*
const g2 = geradora2();
for (let valor of g2){
    console.log(valor)
}
*/

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

/*
const g4 = geradora4();
for (let valor of g4){
    console.log(valor);
}
*/

function* geradora5(){
    yield function(){
        console.log("Vim do y1");
    }
    // Mais codigo
    
    yield function(){
        console.log("Vim do y2");
    }
}

const g5 = geradora5();
const funct1 = g5.next().value;
const funct2 = g5.next().value;

funct1();
funct2();