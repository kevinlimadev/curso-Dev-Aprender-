// Exercício Nota Escolar 
// Obter a média a partir de um array 


// 0 - 59   : F
// 60 - 69  : D
// 70 - 79  : C
// 80 - 89  : B
// 90 - 100 : A

const notas = [90,100,80];

function mediaDeNotas(array)
{
    let total = 0;
    for( let nota of notas )
    {
        total += nota;
    }
    let media = total/notas.length;
    
    if( media < 59 )
    {
        return "F";
    }
    else if( media < 69)
    {
        return "D";
    }
    else if( media < 79)
    {
        return "C";
    }
    else if ( media < 89)
    {
        return "B";
    }
    else
    {
        return "A";
    }
}

console.log(mediaDeNotas(notas));