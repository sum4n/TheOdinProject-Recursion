#!/usr/bin/env node

// Largest prime factor
// Problem: 3

// link: https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//  5| 13195
//   | -----
//   7| 2639
//    | -----
//   13| 377
//     | ----
//       29

function factorial(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return factorial(number / i);
    }
  }
  return number;
}

console.log(`Largest prime factor of 13195 is: ${factorial(13195)}`);
console.log(
  `Largest prime factor of 600851475143 is: ${factorial(600851475143)}`
);
