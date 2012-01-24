var // Program setup
factorial = require("./factorial");

function routes( x, y ) {
  return factorial(x * 2) / factorial(x) / factorial(y);
}

console.log( routes( 2, 2 ) );
// 6
console.log( routes( 20, 20 ) );
// 137846528820

