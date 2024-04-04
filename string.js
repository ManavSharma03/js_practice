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

console.log(lengthOfLongestSubstring("abc"))
