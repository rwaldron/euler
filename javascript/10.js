var // Program setup
isPrime = require("./isprime"),
start = (new Date()).getTime(),
end;

var // Program specific
ceil = 2e6,
total = 2,
k = 3;


for ( ; k <= ceil; k++ ) {
  if ( isPrime(k) ) {
    total += k;
  }
}

end = (new Date()).getTime() - start;

console.log( (total === 142913828922 && "WIN") || "LOSE" );
console.log( end >= 1000 ? (end/1000) + "s" : end + "ms"  );
