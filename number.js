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
