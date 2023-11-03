//5- Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
// Example:
// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

//Pseudocode:
//Create a function to find the third highest number
//take as parameter the arr to receive it
//make 3 variables, to represent the first highest, second and third
//loop through arr using any loop..
//now we need to compare if the element is bigger than first
//if yes third is equal second, second is equal first and first is equal a num(element);
//other condition to check if num is bigger than second AND num smaller than first
//last condition if num is bigger than third and num is smaller than second
//return third value
//call function
function findThirdHighestNumber(arr) {
    let first = 0; 
    let second = 0;
    let third = 0; 
  
    for (let num of arr) {
      if (num > first) {
        third = second;
        second = first;
        first = num;
      } else if (num > second && num < first) {
        third = second;
        second = num;
      } else if (num > third && num < second) {
        third = num;
      }
    }
  
    return third;
  }
  
  const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
  const thirdHighest = findThirdHighestNumber(arr);
  console.log(thirdHighest); 