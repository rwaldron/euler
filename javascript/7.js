var isPrime = require("./isprime");

var ceil = 2e6,
k = 2,
j = 0;

for ( ; k <= ceil; k++ ) {
	if ( isPrime(k) ) {
		if ( ++j === 10001 ) {
			console.log( k );
		}
	}
}

// 104743