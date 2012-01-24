// // Previous design
// function isPrime( num ) {
//   var sqrt = Math.sqrt( num ),
//   i = 3;
//
//   if ( num === 1 || (num > 2 && (num % 2) === 0) ) {
//     return false;
//   } else {
//     for ( ; i <= sqrt; i = i + 2 ) {
//       if ( num % i === 0 ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function isPrime( num ) {
  var sqrt = Math.sqrt( num ),
  i = 5;

  if ( num === 1 ||
      ( num > 2 && ((num % 2 === 0) || (num % 3 === 0)) )
      ) {
    return false;
  } else {
    for ( ; i <= sqrt; i = i + 6 ) {
      if ( num % i === 0 || num % (i + 2) === 0 ) {
        return false;
      }
    }
  }
  return true;
}

console.assert( !isPrime(1) );
console.assert( isPrime(2) );
console.assert( isPrime(3) );
console.assert( isPrime(5) );
console.assert( !isPrime(4) );
console.assert( !isPrime(6) );
console.assert( !isPrime(9) );
console.assert( isPrime(11197) );
console.assert( isPrime(104743) );
console.assert( isPrime(9999991) );
console.assert( isPrime(8675311) );
console.assert( isPrime(3367900313) );
console.assert( isPrime(5600748293801) );

if ( typeof exports !== "undefined" ) {
  module.exports = isPrime;
}