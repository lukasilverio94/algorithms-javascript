//Algorithm Day 4-
// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Pseudocode
//Receive an string
//Create a function isPalindrome
//split the string to have an array
//In this new array, stored in a variable, use methods:
//reverse() to reverse the new arr, than join, to remove ,
//Than we need lowercase in case the user make some typo
//we should also lowerCase the str (parameter)
//now that we have a reversed str, we can compare if reversedString is equal to str(param)
//if yes equal, means is a palindrome, return true
//else return false

//Solution:
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("").toLowerCase();
  const strLowerCase = str.toLowerCase();
  let result = strLowerCase === reversedStr ? true : false;
  return result;
};

const str = "level"; //change string to check if is palindrome in this line
console.log(isPalindrome(str));
