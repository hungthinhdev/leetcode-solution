/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let result = nums[0];
    let subArraySum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        subArraySum = Math.max(nums[i], nums[i] + subArraySum);
        result = Math.max(result, subArraySum);
    }
    return result;
}
