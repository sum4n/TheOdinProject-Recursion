#!/usr/bin/env node
// Multiples of 3 or 5
// Problem 1 :
// link: https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(num) {
  let total = 0;
  // need number below input num
  // and need to go down from the given number during recurssion.
  let checkNum = num - 1;

  if (checkNum < 3) return 0;

  if (checkNum % 3 == 0 || checkNum % 5 == 0) {
    total += checkNum;
    // console.log(checkNum);
  }

  total += multiples(checkNum);

  return total;
}

console.log(`Sum of multiples of 3 or 5 below 10: ${multiples(10)}`);
console.log(`Sum of multiples of 3 or 5 below 1000: ${multiples(1000)}`);
