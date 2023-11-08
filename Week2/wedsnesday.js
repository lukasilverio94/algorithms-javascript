// Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.

//Create a function that receive an text
//to lower case the text
//split to have an array
//map through array to replace first letter(0) to uppercase
//Join the array to have the string type again
//print to console

const text = "I'm a little tea pot";

const capitalizeFirstLetter = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((letter) =>
      letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase())
    )
    .join(" ");
};

console.log(capitalizeFirstLetter(text));
