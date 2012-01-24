
function calculateSequence( sequence, operator ) {
	return new Function("return " + (sequence + "").split("").join( operator ) )();
}


exports.productOf = function( s ) {
	return calculateSequence( s, "*" );
}

exports.sumOf = function( s ) {
	return calculateSequence( s, "+" );
}
