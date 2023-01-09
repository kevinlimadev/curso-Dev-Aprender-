// Função para exibir se os valores são par ou ímpar

function parOuImpar(n)
{
    for( let i = 0; i <= n; i++)
    {
        i % 2 == 0 ? console.log( i, "Par") : console.log(i, "Impar");
    }
}
parOuImpar(3);
