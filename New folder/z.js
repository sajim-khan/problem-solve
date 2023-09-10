function sumOfNegativeNumbers(arr) {
    let sum = 0;

    for (const num of arr) {
        if (num < 0) {
            sum += num;
        }
    }

    return sum;
}

// Test the function
const numbers = [-2, 5, 3, -8, 10, -1];
const negativeSum = sumOfNegativeNumbers(numbers);
console.log(negativeSum);  // Output: -11
