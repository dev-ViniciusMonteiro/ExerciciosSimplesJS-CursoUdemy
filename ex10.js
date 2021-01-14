/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function repetir(num){
    return Array(num).fill('+').join(' ');
}

console.log(repetir(2))