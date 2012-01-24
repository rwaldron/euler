var isPrime = require("./isprime"),
Benchmark = require("benchmark"),
timer = new Benchmark.Suite();


// Program test stuff
var ceil = 2e6,
total = 2,
k = 3;

timer.add("Sum of Primes to 2e6", function() {


  for ( ; k <= ceil; k++ ) {
    if ( isPrime(k) ) {
      total += k;
    }
  }

}).on("cycle", function(event, bench) {

  console.log(String(bench));

}).on("complete", function() {

  console.log( (total === 142913828922 && "WIN") || "LOSE" );

  //console.log( end >= 1000 ? (end/1000) + "s" : end + "ms"  );

  //console.log( this );
  console.log("Fastest is " + this.filter("fastest").pluck("name"));

}).run({ "async": true });

// console.log( (total === 142913828922 && "WIN") || "LOSE" );
// console.log( end >= 1000 ? (end/1000) + "s" : end + "ms"  );
