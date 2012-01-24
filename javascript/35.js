var isPrime = require("./isprime"),
		ceil = 1e6,
		results = [];

function isCircular( n ) {
	var s = n + "",
	i = 0,
	length = s.length,
	bool = false;

	if ( isPrime(n) ) {
		bool = true;

		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				s = s.slice( -(s.length-1) ) + s[0];

				if ( !isPrime( +s ) ) {
					bool = false;
					break;
				}
			}
		}
	}

	return bool;
}

console.assert( isCircular(19937) );
console.assert( isCircular(2) );

while( ceil-- ) {
	if ( isPrime(ceil) && isCircular(ceil) ) {
		results.push(ceil);
	}
}


console.log( results.length );
// 55

//console.log( results );