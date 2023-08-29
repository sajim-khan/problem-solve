function countUppercaseLetters(str) {
  let uppercaseCount = 0;

  for (const char of str) {
    if (char >= "A" && char <= "Z") {
      uppercaseCount++;
    }
  }

  return uppercaseCount;
}

// Test the function
const inputString = "Hello World!";
const uppercaseCount = countUppercaseLetters(inputString);
console.log(uppercaseCount); // Output: 2

