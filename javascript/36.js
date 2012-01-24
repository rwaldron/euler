// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
//
// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
//
// (Please note that the palindromic number, in either base, may not include leading zeros.)

// palindromic in base 10 and base 2
//(585).toString(2)

var isPalindrome = require("./ispalindrome"),
    ceil = 1e6 + 1,
    palindromes = [],
    sum = 0;


while( ceil-- ) {

  // console.log( +ceil.toString(2) );
  if ( isPalindrome( ceil ) &&
        isPalindrome( ceil.toString(2) ) ) {
    //console.log( ceil, ceil.toString(2) );
    palindromes.push( ceil );
    sum += ceil;
  }
}

console.log(
  new Function("return " + palindromes.join("+"))()
);


// 872187