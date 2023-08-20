function findMinAndMax(array) {
  if (array.length === 0) {
    return { min: undefined, max: undefined };
  }

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  return { min, max };
}

const numbers = [3, 7, 11, 2, 9];
const result = findMinAndMax(numbers);

console.log("Minimum:", result.min);
console.log("Maximum:", result.max);


