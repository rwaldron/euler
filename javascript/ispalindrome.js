// Performance:
// http://jsperf.com/ispalindromic

// Solutions found in the wild...
//
// function isPalindrome( n ) {
// 	return n === +(n + "").split("").reverse().join("");
// }
//
// function isPalindrome( number, base ) {
// 	var reverse = 0,
// 	k = number;
//
// 	base = base || 10;
//
// 	while( k !== 0 ) {
// 		reverse = reverse * base + k % base;
// 		k = parseInt( k / base, 10 );
// 	}
// 	return number === reverse;
// }


function isPalindrome( n ) {
	var str = String(n),
	len = str.length,
	ret = true,
	k = 0, l = 0, h = len - 1;

	while( k < len ) {
		if ( str[ l + k ] !== str[ h - k ] ) {
			ret = false;
			break;
		}
		k++;
	}
	return ret;
}

console.assert( !isPalindrome( 998001 ) );
console.assert( isPalindrome( 5005 ) );
console.assert( isPalindrome( 66 ) );
console.assert( isPalindrome( 666 ) );
console.assert( isPalindrome( 606606 ) );

if ( typeof exports !== "undefined" ) {
	module.exports = isPalindrome;
}