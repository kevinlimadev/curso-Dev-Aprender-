// Criar uma função que retorna os multíplos de 3 e  5

function somaMultiplos(n)
{
    let total = 0;
    for( let i = 0 ; i<=n ; i++ )
    {
        if((i % 3 === 0) || (i % 5 === 0))
        {
            total += i;
        }
    }
    return total;
}
console.log(somaMultiplos(8));