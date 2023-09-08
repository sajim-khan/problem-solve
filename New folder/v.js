function calculateAverage(arr) {
  if (arr.length === 0) {
    return null; // Handle an empty array
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// Test the function
const numbers = [12, 45, 6, 89, 23, 1, 67];
const average = calculateAverage(numbers);
console.log(average); // Output: 32.57142857142857
