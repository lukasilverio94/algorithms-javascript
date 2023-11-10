// Friday: Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.
// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
//Pseudocode ######
//Create a function called Fibonacci that receive a number
// Initialize variables representing current  and previous terms
// Calculate the sum of the current and previous terms
// Update current term  to be the previous term
// Update previous term  to be the newly calculated term
//Return previous term and print result

const fibonnaci = (n) => {
  if (n <= 0) {
    return "Invalid Input";
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let currentTerm = 1;
    let previousTerm = 1;
    for (let i = 3; i <= n; i++) {
      let temp = currentTerm + previousTerm;
      currentTerm = previousTerm;
      previousTerm = temp;
    }
    return previousTerm;
  }
};

let n = 7; //Change here the number to find result
console.log(fibonnaci(n));
