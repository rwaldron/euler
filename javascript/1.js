// sum of divisible by 3 or 5 to 1000
var k = 1000, m = 0;

while( --k ) {
  if ( !(k % 5) || !(k % 3)) {
    m += k;
  }
}

console.log( m );
// 233168