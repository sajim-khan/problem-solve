function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Test the function
const numbers = [12, 45, 6, 89, 23, 1, 67];
const sum = calculateSum(numbers);
console.log(sum); // Output: 243
