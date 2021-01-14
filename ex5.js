// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function higherNumber(n1,n2){//deckari a funcao
    if(n1>n2){//vejo qual 'e maior
        return console.log(`Number ${n1} greater than ${n2}`)
    }
    if(n2>n1){
        return console.log(`Number ${n2} greater than ${n1}`)
    }
    else{//caso n tenha mior sao iguais
        return console.log(`Number ${n1} equals ${n2}`)
    }
}

higherNumber(5,4)//chamo a funcao