// Tuesday : Selection Sort

//Pseudocode
//Create a function call selectionSort that receives as arr as param.
//Start a variable min, dont assign any value for now
//make the first loop(i)
//inside the loop assign min to be equals i
//make another loop (inside i ) that now is j loop
//compare if arr[j] < arr[min], if yes, min is equal j now
//compare the indexes to see if min !== i,
//if not, swap the values between arr[i], arr[min].
//print result

let arr = [15, 25, 8, 23, 19, 3, 18, -5];

const selectionSort = (arr) => {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

const result = selectionSort(arr);
console.log(result);
