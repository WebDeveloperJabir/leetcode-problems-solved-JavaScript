/* LeetCode - (0007) || Reverse Integer */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    let result = Math.abs(x).toString().split('').reverse().join('');
    result = isNegative ? -Number(result) : Number(result);
    if (result < -(2**31) || result > 2**31 - 1) {
        return 0;
    }
    return result;
};