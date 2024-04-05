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

// need to fix this
var characterReplacement = (s, k) => {
  let mock = s;
  let character = "";

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    console.debug({ element, character });

    if (character && element !== character) {
      if (element !== s[index + 1]) {
        mock = mock.replace(element, character);
      }
    }

    character = element;
  }

  console.debug({ mock });
};

console.debug(characterReplacement("ABAB"));
