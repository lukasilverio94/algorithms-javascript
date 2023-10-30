// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//1. Receive the array
//2. Check if theres negative number at array
//3. if there's negative number, replace with 0
//4. print out the filtered array

const array = [1, -3, 5, -4, 1, -2];

for (let i = 0 ; i < array.length; i++){
    if(array[i] < 0){
        array[i] = 0;
    }
}

console.log(array)
