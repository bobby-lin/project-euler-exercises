/**
 * Created on: 5/1/16
 *     Author: Bobby Lin
 */

function largestPrimeFactor(n) {
    var i;
    for(i = 2; i<= n; i++) {
        if(n % i === 0) {
            n /= i;
            i--;
        }
    }
    return i;
}

largestPrimeFactor(600851475143);
