/**
 * Created on: 2/1/16
 *     Author: Bobby Lin
 */

function multiples() {
    var sum = 0;
    for(var i = 3; i < 1000; i++) {
        if(i%3 === 0 || i%5 === 0) {
            sum += i;
        }
    }
}

multiples();
