function findMaxSubarraySum(nums) {
  if (nums.length === 0) {
    return 0; // Handle the case of an empty array
  }

  let maxSum = nums[0]; // Initialize maxSum with the first element
  let currentSum = nums[0]; // Initialize currentSum with the first element

  for (let i = 1; i < nums.length; i++) {
    // Calculate the maximum between the current element and the current element + currentSum
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if the currentSum becomes larger
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarraySum(array);
console.log(maxSubarraySum); // Output should be 6

