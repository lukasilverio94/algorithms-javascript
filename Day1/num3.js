//3. Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this: */

//Make a new variable to store the sum
//The Number is the i element
//Loop to have all the numbers
//print it to console

let sum = 0;
for (let i = 1; i < 136; i++) {
  sum += i;
  let result = `Number is: ${i}, Sum is: ${sum}`;
  console.log(result)
}
