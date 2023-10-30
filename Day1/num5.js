// 5. Find Max


// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//1. Create a function
//2. start a variable to keep the largestNumber variable
//3. Loop through array
//4. Compare if index number is bigger than largest Number(started as arr[0], first item of array)

function findMaxValue(arr){
    let largestNumber = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i]
        }
    }
    return largestNumber
}

const largestNumberInArray = findMaxValue([1, 2, 3, 4]);
console.log(`The largest number at array is: ${largestNumberInArray}`)


//Math.max Method
// const array = [1, 2, 3, 4, 5]

// const largestNumber = Math.max(...array);
// console.log(largestNumber)