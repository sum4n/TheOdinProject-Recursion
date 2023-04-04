#!/usr/bin/env node
// Largest palindrome product
// Problem 4
// link: https://projecteuler.net/problem=4

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product
// of two 3-digit numbers.

function palindromeRecursion(number1, number2, largestPalindrome = 0) {
  if (number1 <= 100) return largestPalindrome;

  // if (number2 <= 900 && number1 % 11 == 0) {
  //   return palindromeRecursion(number1 - 11, 999, largestPalindrome);
  // }

  if (number2 <= 100) {
    return palindromeRecursion(number1 - 1, number1 - 1, largestPalindrome);
  }

  let product = number1 * number2;

  // if (product < largestPalindrome) {
  //   return largestPalindrome;
  // }

  if (number1 % 11 != 0) {
    console.log(number1);
    return palindromeRecursion(number1 - 1, 999, largestPalindrome);
  }

  if (
    number1 % 11 == 0 &&
    checkPalindrome(product) &&
    product > largestPalindrome
  ) {
    console.log(number1, number2);

    largestPalindrome = product;
    console.log(`num1: ${number1} num2: ${number2} palin: ${product}`);
    console.log(`Largest palindrome: ${largestPalindrome}`);
    return palindromeRecursion(number1 - 11, 999, largestPalindrome);
  }

  if (
    number1 % 11 == 0 &&
    !checkPalindrome(product) &&
    product > largestPalindrome
  ) {
    console.log(number1, number2);
    return palindromeRecursion(number1, number2 - 1, largestPalindrome);
  }

  if (
    number1 % 11 == 0 &&
    !checkPalindrome(product) &&
    product < largestPalindrome
  ) {
    return palindromeRecursion(number1 - 11, 999, largestPalindrome);
  }

  return largestPalindrome;
}

console.log(palindromeRecursion(999, 999));

function palindromeLoop() {
  let steps = 0;
  let largestPalindrome = 0;
  let firstNum = 0;
  let secondNum = 0;

  for (i = 999; i >= 100; i--) {
    for (j = i; j >= 100; j -= i % 11 == 0 ? 11 : 1) {
      // j = i to skip duplicate multiplication.
      let k = i * j;
      steps += 1;
      // console.log(steps);
      //   console.log(j);
      // significantly decreases number of steps.
      if (k < largestPalindrome) break;
      if (k > largestPalindrome && checkPalindrome(k)) {
        console.log(k);
        largestPalindrome = k;
        firstNum = i;
        secondNum = j;
      }
    }
  }

  return `The largest palindrome made form the product
  of two 3-digit numbers is ${largestPalindrome} = ${firstNum} x ${secondNum} steps:${steps}`;
}

function checkPalindrome(num) {
  if (num % 11 != 0) return false;
  num = num.toString();
  let numReverse = num.split("").reverse().join("");

  if (num === numReverse) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindromeLoop());
// console.log(checkPalindrome(3001));
