// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//Create a function that take arr as argument
//create new empty array to store the max numbers found at the array passed
//Loop through arrays
//declare a variable to store the largestNumber, initially the first item of each array will be the highest to compare
//a nested loop inside the "i" loop, start from 1, because the 0 is our largestNumber already assigned.
//If condition to check if the arr[i][j](now we are inside each array), if is bigger than largestNumber,
//when find the biggest inside the array, assign it to the variable largestNumber.
//our empty string maxvaluesfound, each index will receive the largestnumber value.
//Print result
function largestOfFour(arr) {
  const maxValuesFound = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    maxValuesFound[i] = largestNumber;
  }
  return maxValuesFound;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
