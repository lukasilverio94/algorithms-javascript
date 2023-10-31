// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
//pseudocode:
//looping between 200 and 2700
//check items that are divisible by 3 or 5 with % operator but not both.
//sum these values
//SOLUTION:
const arrayDivisibleNumbers = [];
let sum = 0;
for (let i = 200; i <= 2700; i++) {
  if (i % 3 === 0 || (i % 5 === 0 && !(i % 3 === 0 && i % 5 === 0))) {
    arrayDivisibleNumbers.push(i);
    sum += i;
  }
}
console.log(`The sum of numbers divisible by 3 and 5 is: ${sum}`);

// ######################################################################################################################################
//2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
//Pseudocode:
//check if array.length < 2 (isnt an array, just return arr.)
//Receive an array
//create algorithm that shifts each number one by one to to front
//first we can pop the last element and store in a variable lastElement
//than we can add it to the beginning of the array using unshift method
//Print output

//SOLUTION:
function shiftElementToFront(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const lastElement = arr.pop(); //last element
  arr.unshift(lastElement); //add to the front
  return arr;
}

const array = [2, 1, 6, 4, -7];
const shiftedArray = shiftElementToFront(array);

// ######################################################################################################################################

//3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
//pseudocode: create an array
//check if is divisible by 3 or 5 with % operator
//if is by 3, replace value to "Fizz", if is to 5, to "Buzz", by both, replace to "FizzBuzz"
let arr = [];

for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0) {
    arr.push("Fizz");
  } else if (i % 5 === 0) {
    arr.push("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FizzBuzz");
  } else {
    arr.push(i);
  }
}
console.log(arr);

// ######################################################################################################################################

//4. Fibonacci

//create a function to generate Fibonacci
//create an empty array
//check if starts at 0
//make sure the first sequence should be 0, 1.
//else these first conditions, we should make a loop that start in 2 (because 0, 1 are already defined [0, 1])
//return value output
function fibonacciGenerator(num) {
  let output = [];

  if (num === 1) {
    output = [0]; //Starting the Array with 0.
  } else if (num === 2) {
    output = [0, 1]; //first 2 index should be [0, 1]
  } else {
    output = [0, 1];
    for (let i = 2; i < num; i++) {
      //loop starts at 2 because we have already [0, 1].
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

console.log(fibonacciGenerator(15));
//

// ######################################################################################################################################

//5.Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
//pseudocode
//Receive an array
//create a empty array inside the function to store the positives
//Check the positives number with filter method
//print console the new array
function removeNegative(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeNegative([1, -2, 4, 1, 5, -2, -15, 4, 8]));

// ######################################################################################################################################

//6.Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//Receive array
//Get the last word of the array (using array.length - 1)
//Split the last word using split() method
//return the new arr with the last word already altered

function replaceLastItemArr(arr) {
  let lastWord = arr[arr.length - 1];
  let splitedWord = lastWord.split(" ");
  return arr;
}

console.log(
  replaceLastItemArr(["Man", "I", "Love", "The", "Matrix", "*******"])
);
