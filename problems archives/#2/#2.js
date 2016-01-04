/**
 * Created on: 4/1/16
 *     Author: Bobby Lin
 */

function fib(num) {
    var count = 0;
    if(num === 0) {
        return 1;
    }
    else if(num === 1) {
        return 2;
    }
    else {
        count = fib(num-1) + fib(num-2);
    }
    return count;
}

function evenFib(){
    var count = 0;
    var i = 1;
    while(true) {
        if(fib(i) < 4000000) {
            count += fib(i);
            i += 3;
        }
        else {
            break;
        }
    }
    return count;
}

evenFib();
