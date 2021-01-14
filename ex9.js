/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação
*/

function repetir(termo,vezes){
    var arr = []
    for(i=0;i<vezes;i++){
        arr.push(termo)
    }
    return arr
}

console.log(repetir(7,5))