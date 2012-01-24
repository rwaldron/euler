function reverse( number, base ) {
  var reverse = 0;

  base = base || 10;

  while( number !== 0 ) {
    reverse = reverse * base + number % base;
    number = parseInt( number / base, 10 );
  }
  return reverse;
}

console.assert( reverse(585) === 585 );
console.assert( reverse(585, 10) === 585 );
console.assert( reverse("9001") === 1009 );
console.assert( reverse("9001", 10) === 1009 );
console.assert( reverse(9001, 10) === 1009 );


if ( typeof exports !== "undefined" ) {
  module.exports = reverse;
}