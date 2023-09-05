function isPalindrome(inputString) {
  // Remove spaces and convert to lowercase
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // Check if it's a palindrome
  return cleanedString === reversedString;
}

// Test the function
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "racecar";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: true
