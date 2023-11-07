// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number. For these algorithms you are allowed to use the split() method.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.

//Pseudocode
//Create a function that receive an text
//split in array with split method
//Create a longerWord variable to store and return inside the function (result)
//Loop through words
//Check the length of each word
//Find the bigger one
//Return the number with the result of biggest word
//print it

const str = "The quick brown fox jumped over the lazy dog";

const findLongestWord = (str) => {
  let words = str.split(" ");
  let longerWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longerWord) {
      longerWord = words[i].length;
    }
  }
  return longerWord;
};

console.log(findLongestWord(str));
