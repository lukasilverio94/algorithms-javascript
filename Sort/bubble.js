let array = [5, 1, 9, 4, 3, 7];

//Pseudocode
//Create a function bubbleSort() take an array as param
//Make two loops, one inner and outer (i and j)
//check if first element is smaller than next element
//If yes, keep position, if not, swap them
//Do this verification until we have the sorted array
//Print at console

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort(array));
