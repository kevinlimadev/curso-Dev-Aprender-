//Criar um método para ler as propriedades de um objeto 
// e exibir somente as propriedade do tipo string , exibir chave e valor. 

const pessoa = {
    nome: "Kevin",
    sobrenome: "Lima",
    idade: 28,
    escolaridade: "Pós Graduação",
    altura: 1.70
}

function exibirStrings( objeto )
{
    for( let key in objeto )
    {
        if(typeof(objeto[key]) === "string")
            console.log(key,objeto[key]);
    }
}

exibirStrings(pessoa);
