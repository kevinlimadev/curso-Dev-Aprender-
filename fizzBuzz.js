/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

function fizzBuzz(n)
{   
    if (typeof(n) !== "number" )
    {
        return "Não é um número.";
    }
    else if ( n % 3 === 0 && n % 5 === 0)
    {
        return "FizzBuzz.";
    }
    else if ( n % 3 === 0)
    {
        return "Fizz.";
    }
    else if( n % 5 === 0)
    {
        return "Buzz";
    }
    else
    {
        return n;
    }

}
console.log(fizzBuzz(30));