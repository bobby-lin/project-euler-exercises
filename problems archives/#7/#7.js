/**
 * Created on: 9/1/16
 *     Author: Bobby Lin
 */

function nTermPrime(n) {
    var ans = 0;
    var count = 1;
    var num = 2;
    while(count < n) {
        if(isPrime(num)) {
            ans = num;
            count++;
        }
        num++;
    }
    return ans;
}

function isPrime(n) {
    var maxNumToCheck = Math.ceil(Math.sqrt(n));
    for(var i = 2; i <= maxNumToCheck; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

nTermPrime(10001);
