/**
 * Created on: 8/1/16
 *     Author: Bobby Lin
 */

function difference() {
    var sumOfSq = 0;
    var sum = 0;
    for(var i = 1; i<=100; i++) {
        sum += i;
        sumOfSq += Math.pow(i,2);
    }
    return Math.abs(sumOfSq - Math.pow(sum,2));
}

difference();
