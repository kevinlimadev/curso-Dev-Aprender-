// Crie um objeto que representa um endereço 
// Este objeto deve conter: 
// Rua , cidade , CEP 
// Método exibir endereço

function Endereco( rua , cidade , CEP )
{
    this.rua = rua,
    this.cidade = cidade,
    this.CEP = CEP,
    this.exibir = function(){
        console.log(this);
    }
}

const meuEndereco = new Endereco('Rua: Sete de Setembro', 'Belo Horizonte', 30110002 )

meuEndereco.exibir()