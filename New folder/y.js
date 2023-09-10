function findMaxElement(arr) {
  if (arr.length === 0) {
    return "The array is empty.";
  }

  let max = arr[0]; // Initialize max to the first element of the array

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger element is found
    }
  }

  return max;
}

const numbers = [10, 5, 7, 15, 3, 8];
const maxNumber = findMaxElement(numbers);
console.log("The maximum number is:", maxNumber); // Output: The maximum number is: 15
