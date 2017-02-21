/**
 * Created by Bobby on 21/2/2017.
 * Notes: I used Sieve of Eratosthenes to identify all the prime numbers below given upper_limit (2 Millions)
 */

function summingPrime(upper_limit) {
    var prime = findPrime(upper_limit);
    var sum = 0;
    for(var i = 2; i <= upper_limit; i++) {
        if(prime[i]) {
            sum += i;
        }
    }
    console.log("Total = " + sum);
}

function findPrime(upper_limit) {
    var prime = new Array(upper_limit).fill(true);
    for(var i = 2; i <= upper_limit; i++) {
        if(prime[i]) {
            // Set all multiples of i to false
            for(var j = i*2; j<= upper_limit; j += i) {
                prime[j] = false;
            }
        }
    }

    return prime;
}

summingPrime(2000000);