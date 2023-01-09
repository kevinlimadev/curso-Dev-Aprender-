// Criar uma função que exibe a quantidade de * de acordo com o índice. 

function exibirAsteriscos( linhas )
{
    const ast = '*';
    for( let i = 1; i <=linhas; i++)
    {
        console.log(ast.repeat(i));
    }
    console.log('\n');
}
exibirAsteriscos( 5 );