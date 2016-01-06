/**
 * Created on: 6/1/16
 *     Author: Bobby Lin
 */

function largestPalindrome() {
    var maxVal = 0;
    for(var i = 999; i >= 100; i--) {
        for(var j = 999; j >= 100; j--) {
            var product = i * j;
            if(isPalindrome(product)) {
                maxVal = Math.max(maxVal, product);
            }
        }
    }
    return maxVal;
}

function isPalindrome(n){
    var numStr = n.toString();
    var lastIndex = numStr.length-1;
    var endPoint = numStr.length/2;
    var i, j; // Must declare the two variables outside for-loop
    for(i = 0, j = lastIndex; i < endPoint; i++, j--) {
        if(numStr[i] !== numStr[j]) {
            return false;
        }
    }
    return true;
}

largestPalindrome();
