/**
 * Created on: 7/1/16
 *     Author: Bobby Lin
 */

function smallestCommonMultiple(min, max) {
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    arr.forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

smallestCommonMultiple(1,20);
