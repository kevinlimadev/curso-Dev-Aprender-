// Criar uma função para mostar os números primos até determinado valor (n)

function exibirNumerosPrimos(n)
{
    for(let i = 2; i <= n; i++)
    {
        if(eDivisivel(i))
            console.log(i);
    }
    return 0;
}

function eDivisivel(n)
{
    for(let i = 2; i < n ; i++)
    {
        if( n % i === 0)    //verificando se o número é divisível por algum outro número sem ser ele mesmo, se for este número não é um número primo.
         return false
    }
    return true
}

exibirNumerosPrimos( 20 );