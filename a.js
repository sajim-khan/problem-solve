//Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

//Output
const inputString = "Sajim Khan";
const result = countVowelsAndConsonants(inputString);
console.log("Vowel Count:", result.vowels);
console.log("Consonant Count:", result.consonants);
