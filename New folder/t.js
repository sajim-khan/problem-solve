function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null; // Handle an empty array
    }
    
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Test the function
const numbers = [12, 45, 6, 89, 23, 1, 67];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber);  // Output: 89


