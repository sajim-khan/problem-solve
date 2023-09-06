function findSumOfArrayElements(arr) {
  let sum = 0;

  // Iterate through the array and add each element to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = findSumOfArrayElements(numbers);
console.log(`The sum of the array elements is: ${sum}`);
