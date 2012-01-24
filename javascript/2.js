// sum of all even numbers in a fib sequence to 4million

var j = true,
l = 0, h = 1, v = 0,
m = [];


while( j ) {
  l = m.length < 2 ? l : m[m.length-2];
  h = m.length < 1 ? h : m[m.length-1];

  v = l + h;

  if ( v > 4e6 ) {
    j = false;
  } else {
    m.push(v);
  }
}

m = m.filter(function( val ) {
  return !(val % 2);
});

new Function("return " + m.join("+"))();


// 4613732