// A function that takes two numbers and a callback function as arguments
function performOperation(x, y, callback) {
  const result = x + y;
  // Call the callback function and pass the result as an argument
  callback(result);
}

// A callback function that logs the result to the console
function logResult(value) {
  console.log("The result is:", value);
}

// Call the performOperation function and pass logResult as the callback
performOperation(5, 10, logResult);
