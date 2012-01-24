// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


var isPalindrome = require("./ispalindrome"),
a = 999,
b = 999,
palindromes = [];

outer: while( a > 0 ) {
  inner: while( b > 0 ) {
    if ( isPalindrome( a * b ) ) {
      //console.log( a, b, a * b );
      palindromes.push( a * b );
      break inner;
    }
    b--;
  }

  b = 999;
  a--;
}

palindromes = palindromes.sort(function(a,b) {
  if ( a < b ) {
    return -1;
  }
  if ( a > b ) {
    return 1;
  }
  return 0;
})
console.log( palindromes.pop() );

// 906609

//console.log( isPalindrome( 998001 ) );
// console.log( isPalindrome( 5005 ) );
// console.log( isPalindrome( 66 ) );
// console.log( isPalindrome( 666 ) );
// console.log( isPalindrome( 606606 ) );