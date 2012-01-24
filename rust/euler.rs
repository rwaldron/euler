#[link(name = "euler", vers = "0.1")];

fn is_prime(n: int) -> bool {

  let flt: float = n as float;
  let sroot: int = float::sqrt(flt) as int;
  let i = 3;
  let rbool = true;

  if n == 1 || (n > 2 && n % 2 == 0) {
    false
  }
  else {

    while ( i <= sroot ) {
      if n % i == 0 {
        rbool = false;
        break;
      }
      i += 2;
    }
    rbool
  }
}

// compile
// rustc --lib euler.rs

// $ time ./isprime 36413321723440003717
// 36413321723440003717 is prime
// real	0m0.075s
// user	0m0.002s
// sys	0m0.005s
