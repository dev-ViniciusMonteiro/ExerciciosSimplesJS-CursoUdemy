/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será !1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/


function tipe(param){//declaro a funcao
    if(typeof(param)=='boolean'){//se o tipo do param for boolean ele imprime o inverso
        return console.log(!param)
    }else{
        if(typeof(param)=='number'){//se o param for numero imprime ele negativo
            return console.log(-param)
        }else{//tratamento de erro
            return console.log(param+' is not boolean and number ('+typeof(param)+')')
        }
    }
}


tipe('asd')
tipe(true)
tipe(5)