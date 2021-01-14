/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function filtrarNumeros(arr){
    const novoArray = []
    for(i=0;i<arr.length;i++){
        if(typeof arr[i]==='number'){//se o tipo do elemento na posiao i do array de entrada for um numero
            novoArray.push(arr[i])
        }
    }
    return novoArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))