/**
 * Created on: 11/1/16
 *     Author: Bobby Lin
 *     Resource: https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple
 */

function pythagorasTriple() {
    var pythagoreanSum= 1000;
    var a, b,c;
    for(var n = 1; n < 500; n++) {
        for(var m = (n + 1); m <500; m++) {
            a = m*m - n*n;
            b = 2*m*n;
            c = m*m + n*n;
            if(a+b+c == pythagoreanSum) {
                return a*b*c;
            }
        }
    }
}

pythagorasTriple();
