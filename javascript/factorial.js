var
bigint = require("bigint"),
factorial = (function() {
	var cache = {},
	fn = function( n, big ) {
		if ( n < 2 ) {
			return 1;
		}
		if ( cache[ n ] ) {
			return cache[ n ];
		}
		if ( big ) {
			return cache[ n ] = bigint(n).mul( fn( bigint(n)-1, true ) );
		} else {
			return cache[ n ] = n * fn( n-1 );
		}
	};

	return fn;
})();

console.assert( factorial(10) === 3628800 );
console.assert( factorial(100, true).toString() === "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000" );

if ( typeof exports !== "undefined" ) {
	module.exports = factorial;
}