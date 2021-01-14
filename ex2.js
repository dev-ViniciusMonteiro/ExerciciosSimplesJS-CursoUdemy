    /* 
    Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
    Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
    desconsidere também dias decorridos desde o último aniversário.

    25 anos - retornará 9125
    */


function ageDays(years){//declaro a funcao
    return years*365//faco os anos vezes 365
}

console.log(ageDays(25))//chamo a funcao com os anos(25anos)