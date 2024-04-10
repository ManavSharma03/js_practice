function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
const array = [5, 2, 10, 8, 3];
const secondLargest = findSecondLargest(array);

// smallest sub array with sum k
function smallestSubarraySumK(arr, k) {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == k) {
        result = Math.min(result, j - i + 1);
      }
    }
  }

  // Return result
  return result;
}
