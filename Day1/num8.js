// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

//1. Receive an array
//2. check if theres a negative 
//3. If there is, replace for a string
//4. print it the result

const array = [1, 5, -3, 2, -4, 5 , -3, 2, -5];

for (let i = 0 ; i < array.length; i++){
    if(array[i] < 0){
        array[i] = "Pasta";
    }
}

console.log(array);

