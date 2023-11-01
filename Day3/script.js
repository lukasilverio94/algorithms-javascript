// Factorialize a Number
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Pseudocode
//Declare a function take take a number (n) as argument
//the n is a factorial is the product of all positive integer less than or equal to n
//we need a loop to make the factorial 5!;
//loop in factorial in the case 5:
//1. 1 * 2 = 2 / 2 * 3 = 6 / 6 * 4 = 24 / 24 * 5 = 120!

//Solution
function factorialize(n){
    let product = 1;
    for(let i = 2; i <= n; i++){
        product *= i;
    }
    return product
}

//Edit between parentheses the number you want to factorialize.
console.log(factorialize(5));
