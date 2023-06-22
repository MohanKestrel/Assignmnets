function partitionNums(nums) {
    // Initialize variables.
    const n = nums.length / 2;
    let sumLeft = 0;
    let sumRight = 0;
    let minDiff = Infinity;

    // Iterate over the array 
    for (let i = 0; i < n; i++) {
        sumLeft += nums[i];
        sumRight += nums[i + n];
        const diff = Math.abs(sumLeft - sumRight);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    // Return the minimum difference.
    return minDiff;
}

// Test cases
console.log(partitionNums([3, 9, 7, 3])); // Output: 2
console.log(partitionNums([-36, 36])); // Output: 72
