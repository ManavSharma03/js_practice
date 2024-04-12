/**
 *
 * Given a string s, find the length of the longest substring without repeating characters.
    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function (s) {
  let lastChar = "";
  let result = "";
  s.split("").forEach((info) => {
    if (result.includes(info)) return result;
    lastChar = info;
    result += info;
  });

  return result;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))

/**
 * You are given a string s and an integer k. You can choose any character of the string 
 * and change it to any other uppercase English character. You can perform this operation at most k times.

  Return the length of the longest substring containing the same letter
  you can get after performing the above operations.

  Example 1:

  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa.

  Example 2:

  Input: s = "AABABBA", k = 1
  Output: 4
  Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  The substring "BBBB" has the longest repeating letters, which is 4.
  There may exists other ways to achieve this answer too.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// need to fix this, we can use two loops to track the no of chars
var characterReplacement = (s, k) => {
  let mock = s;
  let character = "";

  let count = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    console.debug({ element, character });

    if (character && element !== character) {
      if (element !== s[index + 1]) {
        mock = mock.replace(element, character);
        // count = 0;
      }
    } else {
      count++;
    }

    character = element;
  }

  console.debug({ mock, count });
};

// console.debug(characterReplacement("ABAB", 2));

// Given strings
let str1 = "abcd";
let str2 = "1234";

// Function to merge two strings alternatively
function mergeStrings(str1, str2) {
  let mergedString = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    if (i < str1.length) {
      mergedString += str1[i];
    }
    if (i < str2.length) {
      mergedString += str2[i];
    }
  }
  return mergedString;
}

// Merge the two strings alternatively
let result = mergeStrings(str1, str2);
// console.log(result); // Output: "a1b2c3d4"

/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

  Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
  
  Example 1:

  Input: s = "abccccdd"
  Output: 7
  Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  const charCount = {};
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    charCount[element] = charCount[element] ? charCount[element] + 1 : 1;
  }
  let longestPalindromeStringLength = 0;
  for (const key in charCount) {
    const keyCountValue = charCount[key];
    if (keyCountValue % 2 === 0) {
      longestPalindromeStringLength += keyCountValue;
    } else {
      const copyCharCount = { ...charCount };
      delete copyCharCount[key];

      const otherPresentValues = Object.values(copyCharCount);

      const hasAnyOtherCharSameLength =
        otherPresentValues.includes(keyCountValue);

      longestPalindromeStringLength +=
        hasAnyOtherCharSameLength && keyCountValue > 1
          ? keyCountValue
          : keyCountValue - 1;
    }
  }
  return longestPalindromeStringLength + 1;
};

// console.debug(longestPalindrome("aabcadd"));

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
  

  Example 1:

  Input: s = "()[]{}"
  Output: true
  Example 2:

  Input: s = "(]"
  Output: false
 */

const checkValidBrackets = (str) => {
  const stack = [];
  const openBrackets = ["(", "{", "["];

  for (let index = 0; index < str.length; index++) {
    const element = str[index];

    if (openBrackets.includes(element)) {
      stack.push(element);
      continue;
    }

    if (element === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      continue;
    }
    if (element === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
      continue;
    }
    if (element === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
      continue;
    }
  }
  console.debug({ stack });

  return !stack?.length;
};

// need to fix this case,there might be 
// some more edge case's 
console.debug(checkValidBrackets("({({})})}"));
