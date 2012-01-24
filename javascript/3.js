// determine the prime factor for a composite number 600851475143 (600,851,475,143)

function fact( k ) {
	var j = 2;

	while( j * j < k ) {
		if ( !( k % j ) ) {
			k = k / j;
		} else {
			j++;
		}
	}

	return k;
}


console.log( fact( 600851475143 ) );

// 6857
