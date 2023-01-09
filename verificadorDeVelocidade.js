// Velocidade máxima 70km/h
// a cada 5 km/h acima do limite de você ganha 1 ponto 
// Math.Floor() para arrednodar valores 
// caso os pontos forem maior que 12 -> "Carteira suspensa!"

function verificadorDeVelocidade( vel )
{   
    let pontos = Math.floor((vel - 70) / 5);

    if ( vel <= 70 )
    {
        return "OK";
    }
    else if ( pontos === 1 )
    {
        return "Você ganhou " + pontos + " ponto.";
    }
    else if ( pontos <= 12 )
    {
        return "Você ganhou " + pontos + " pontos.";
    }
    else
    {
        return "Carteira suspensa!";
    }
}

console.log(verificadorDeVelocidade(100));