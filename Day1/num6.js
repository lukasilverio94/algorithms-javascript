// 6. Get Average
// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

//1. receive an array
//2. sum all elements inside the array
//3. create a variable to store the median value
//4. return the average from the array, that means sum / arr.length;
//5. Print it to console the result

const array = [1, 2, 3, 4, 5]
let sumArr = 0;
let median;

function getAverage(arr) {
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
    median = sumArr / arr.length;
  }
  return median;
}

let result = `The median of the array is: ${getAverage(array)}`;
console.log(result);


