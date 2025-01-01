/* LeetCode - (0004) || Median of Two Sorted Array */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let concatArray = nums1.concat(nums2);
    let cleanArray = concatArray.sort(function(a, b) {return a - b});
    let n = cleanArray.length;
    let sum = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (cleanArray[sum - 1] + cleanArray[sum]) / 2;
    }
    else {
        return cleanArray[sum];
    }
};