#!/usr/bin/env node

// Smallest multiple
// Problem 5
// link: https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

// Psudo code
// 1. Exit case: if number is 3 return 3*2 = 6
// 2. If number is prime number, result is
// previous multiple * prime
// 3. If number is power of a number, result is
// previous multiple * the number
// 4. If number is neither prime nor root of any number,
// result is multiple of previous number.
// m(3)=2x3, m(4)=m(3)x2, m(5)=m(4)x5, m(6)=m(5) and so on.

function smallestMultiple(number) {
  if (number == 3) return 6;

  if (checkPrime(number)) {
    return smallestMultiple(number - 1) * number;
  }

  if (checkNgetRoot(number)) {
    return smallestMultiple(number - 1) * checkNgetRoot(number);
  }

  return smallestMultiple(number - 1);
}
console.log(smallestMultiple(20));

function checkPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(checkPrime(11));

function checkNgetRoot(number) {
  for (let i = 2; i <= number; i++) {
    for (let j = 2; Math.pow(i, j) <= number; j++) {
      // console.log(i, j);
      // console.log(number);
      if (Math.pow(i, j) == number) {
        return i;
      }
    }
  }
  return false;
}
// console.log(checkNgetRoot(16));
