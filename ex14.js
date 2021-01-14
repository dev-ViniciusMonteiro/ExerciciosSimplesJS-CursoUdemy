/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
*/

function objetoParaArray(obj){
    const array = []

    for(i in obj){
        array.push([i,obj[i]])
    }
    return array
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))