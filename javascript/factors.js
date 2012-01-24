var isPrime = require("./isPrime");

function factors( n, prime ) {
  var results = [],
  k = n + 1;

  while( k-- ) {
    if ( (n % k) === 0 ) {
      if ( !prime ) {
        results.push( k );
      } else {
        if ( isPrime(k) ) {
          results.push( k );
        }
      }
    }
  }
  return results.reverse();
}

console.assert( factors(15).join() == "1,3,5,15" );
console.assert( factors(15, true).join() == "3,5" );

//console.assert( factors(134043, true) );
// console.log( factors(134043, true) );
// console.log( factors(134044, true) );
// console.log( factors(134045, true) );
// console.log( factors(134046, true) );
// console.log( factors(134047, true) );

if ( typeof exports !== "undefined" ) {
  module.exports = factors;
}