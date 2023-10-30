// 4. Print the elements of an array
// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

//make a function to receive an array as argument
//loop through the array
//print it to console
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const result = printArr([1, 2, 3, 4, 5]);
console.log(result);


//Using for loop :
let arr = [1, 2, 3, 4, 5, 6];

arr.forEach((item) => console.log(item))