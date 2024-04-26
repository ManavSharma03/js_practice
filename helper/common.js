// common js logics for minor problems

export const getCharacterOccurrence = (s) => {
  const charCount = {};
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    charCount[element] = charCount[element] ? charCount[element] + 1 : 1;
  }

  return charCount;
};

export const getMaxOccurrenceCharAndCOunt = (s) => {
  const charOccurrence = getCharacterOccurrence(s);

  return Object.entries(charOccurrence).reduce(
    (result, [char, charOccurrence]) => {
      return charOccurrence > result.maxCount
        ? { char, maxCount: charOccurrence }
        : result;
    }
  );
};

export const isNumberPrime = (num) => {
  let isPrime = true;

  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

// export default {
//   getCharacterOccurrence,
//   getMaxOccurrenceCharAndCOunt,
//   isNumberPrime,
// };
