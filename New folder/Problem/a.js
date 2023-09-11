function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let largest = arr[0]; // Assume the first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if a larger number is found
    }
  }

  return largest;
}

// Example usage:
const numbers = [12, 45, 7, 23, 56, 89, 3];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);
