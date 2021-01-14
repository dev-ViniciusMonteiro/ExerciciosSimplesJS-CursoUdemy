/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

function primeiroEultimoArray(array){
    return [array[0],array[array.length-1]]
}

console.log(primeiroEultimoArray([1,2,3,4]))