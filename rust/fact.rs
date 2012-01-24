use std;
import std::io::println;


// TODO: try using boxed closure to
// keep a cache vector
fn fact(n: int) -> int {

  if n <= 1 {
    1
  }
  else {
    fact( n - 1 ) * n
  }
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
    for i in [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] {
      println(
        int::str(fact(i))
      );
    }
  }
  else {
    println(
      int::str(fact(int::from_str(args[1])))
    );
  }
}


// compile and run:
// rustc fact.rs && ./fact 10
// 10 = 3628800
// 31 = 4999213071378415616