function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Test the function
const word1 = "listen";
const word2 = "silent";
const result = areAnagrams(word1, word2);
console.log(result);  // Output: true
