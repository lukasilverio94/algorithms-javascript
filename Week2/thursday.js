// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

//create a function
//make a loop to
//find the smallest and biggest number
//create a sum variable to store the result
//make another loop, through smallest to biggest number
//make result += i from this last loop
//print result

function sumAll(arr) {
  let smallestNumber = arr[0];
  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }

    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  let sum = 0;
  //loop through the range from the smallest to largest number
  for (let i = smallestNumber; i <= largestNumber; i++) {
    sum += i;
  }

  return sum;
}
//Print result
const result = sumAll([1,4]);
console.log(result)