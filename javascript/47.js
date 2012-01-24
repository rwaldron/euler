// The first two consecutive numbers to have two distinct prime factors are:
//
// 14 = 2  7
// 15 = 3  5
//
// The first three consecutive numbers to have three distinct prime factors are:
//
// 644 = 2²  7  23
// 645 = 3  5  43
// 646 = 2  17  19.
//
// Find the first four consecutive integers to have four distinct primes factors.
// What is the first of these numbers?

var factors = require("./factors"),
    has = [],
    k = 134000,
    cons = 1,
    target = 4;

while( cons < target ) {
  k++;

  if ( factors(k, true).length >= 4 ) {
    cons++;
  } else {
    cons = 0;
  }
}

k -= 3;

console.log( k );

//134043