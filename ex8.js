/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(n1,n2){
    var num = 0
    for(i=0;i<n2;i++){
        num = num + n1
    }
    return num
}

console.log(multiplicar(7,3))

//ou

function multiplicar2(n1,n2){
    if((n1==0)||(n2==0)) return 0

    return n1 == 1 ? n1 : n1+multiplicar2(n1,n2-1)
}

console.log(multiplicar2(7,5))