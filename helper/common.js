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
