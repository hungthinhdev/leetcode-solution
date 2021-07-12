/*
Problem: Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Result: Success
Runtime: 140 ms, faster than 8.24% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.5 MB, less than 37.80% of JavaScript online submissions for Reverse Integer.
*/

var reverse = function(x) {
    var reverseX = 0;

    // Check if the argument is negative or not
    var isNegative = x < 0;
    x = Math.abs(x);

    // Reverse the argument
    while (x > 0) {
        reverseX = reverseX * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    //  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
    if (reverseX > Math.pow(2, 31)) return 0;

    return !isNegative ? reverseX : -reverseX; 
};



