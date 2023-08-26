function countUppercaseLetters(str) {
  let count = 0;

  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      count++;
    }
  }

  return count;
}

// Test the function
const inputString = "Hello World!";
const uppercaseCount = countUppercaseLetters(inputString);
console.log(uppercaseCount); // Output: 2
