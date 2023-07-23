//Write a code to calculate if the string is palindrome ? (Use javascript only)

function isPalindrome(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return formattedStr === formattedStr.split("").reverse().join("");
}

console.log(isPalindrome("radar")); //true

