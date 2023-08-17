function sumEvenNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(numbersArray);

console.log("Sum of even numbers:", evenSum);
