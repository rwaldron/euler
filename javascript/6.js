// Find the difference between the sum of the squares of the first one hundred natural
// numbers and the square of the sum.

function sumOfSquares( range ) {
	var sum = 0;

	while( range.length ) {
		sum += Math.pow( range.pop(), 2 );
	}

	return sum;
}

function squareOfSum( range ) {
	var sum = 0;
	while( range.length ) {
		sum += range.pop();
	}

	return Math.pow( sum, 2 );
}


var a = [], b = [],
ceil = 100,
k = 1;

for ( ; k <= ceil; k++ ) {
	a.push( k );
	b.push( k );
}


console.log( squareOfSum( b ) - sumOfSquares( a ) );
//console.log( squareOfSum( b ) );

//sumOfSquares() - squareOfSum();