function sumArrayElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example array
const numbers = [3, 7, 1, 9, 4];

// Call the function and print the result
const totalSum = sumArrayElements(numbers);
console.log("Sum of array elements:", totalSum);
