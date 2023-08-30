function containsSubstring(mainString, subString) {
  return mainString.includes(subString);
}

// Test the function
const inputMain = "Hello, World!";
const inputSub = "World";
const containsSub = containsSubstring(inputMain, inputSub);
console.log(containsSub); // Output: true
