import { isNumberPrime } from "./helper/common.js";

/**
 *  Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

    Example 1:

    Input: n = 19
    Output: true
    Explanation:
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
 */

const isNumberHappy = (numValue) => {
  const notHappyNumbers = [];
  const calculateSquareAndLoop = (num) => {
    const singleDigit = num
      .split("")
      .map((num) => Number(num))
      .reduce((result, next) => (result += Number(next) * Number(next)), 0);

    if (singleDigit == 1) return true;

    const isNumberNotHappy = notHappyNumbers.includes(singleDigit);

    if (isNumberNotHappy) return false;

    notHappyNumbers.push(singleDigit);

    return calculateSquareAndLoop(singleDigit.toString());
  };
  return calculateSquareAndLoop(numValue.toString());
};

// console.debug(isNumberHappy(1111111));
// console.debug(isNumberHappy(2));

/**
 * Given an integer n, return the number of prime numbers that are strictly less than n. 

  Example 1:

  Input: n = 10
  Output: 4
  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

  Example 3:

  Input: n = 1
  Output: 0
 */

const availablePrimeNumbers = (num) => {
  let primeNumCounter = 0;
  for (let counter = num - 1; counter > 1; counter--) {
    const isPrime = isNumberPrime(counter);
    if (isPrime) {
      primeNumCounter++;
    }
  }
  return primeNumCounter;
};
// console.debug(availablePrimeNumbers(1));
// console.debug(availablePrimeNumbers(10));
// console.debug(availablePrimeNumbers(0));

/**
 *Given an integer n, return true if it is a power of two. Otherwise, return false.

  An integer n is a power of two, if there exists an integer x such that n == 2x.  

  Example 1:

  Input: n = 1
  Output: true
  Explanation: 2^0 = 1
  
  Example 2:

  Input: n = 16
  Output: true
  Explanation: 2^4 = 16

  Example 3:

  Input: n = 3
  Output: false
 */

const isNumberPowerOfTwo = (num) => {
  let result = false;
  let counter = 0;
  let calPower;
  do {
    calPower = Math.pow(2, counter);
    if (calPower === num) {
      result = true;
      break;
    }
    counter++;
  } while (calPower < num);
  return result;
};

// console.debug(isNumberPowerOfTwo(1))
// console.debug(isNumberPowerOfTwo(3))
// console.debug(isNumberPowerOfTwo(16))
