// Rough port of https://gist.github.com/1412787

use std;
use euler;
import std::io::println;

fn result(arg: str, b: bool) -> str {

  let msg = "";

  if b {
    msg = "%s is prime";
  }
  else {
    msg = "%s is not prime";
  }

  #fmt(msg, arg)
}

fn main(args: [str]) {

  // TODO: Find out why
  // in the mean time, do this icky dance to check for args
  let x = -1;

  for arg in args {
    x += 1;
  }

  // why not? if str::is_empty(args[1]) {
  if x == 0 {
    for i in [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11197 ] {
      println(
        result( int::str(i), euler::is_prime(i) )
      );
    }
  }
  else {

    let num = int::from_str(args[1]);

    println(
      result( args[1], euler::is_prime(num) )
    );
  }
}


// compile and run:
// rustc isprime.rs -L . && ./isprime && ./isprime 9450031 && ./isprime 104743
// 2 is prime
// 3 is prime
// 5 is prime
// 7 is prime
// 11197 is prime
// 9450031 is not prime
