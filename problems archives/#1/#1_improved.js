/**
 * Created on: 2/1/16
 *     Author: Bobby Lin
 */

function sumOfMultiples(n) {
    var sum = 0;
    for(var i = n; i < 1000; i++) {
        if(i%n === 0) {
            sum += i;
        }
    }
    return sum;
}

// Find the sum of multiples of 3 and 5 individually 
// and subtract the duplicated count (that is multiple of 15)
console.log(sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15));
