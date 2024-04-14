// practice problems for objecs

// for in loop is for objects 


export const getCharacterOccurrence = (s) => {
  const charCount = {};
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    charCount[element] = charCount[element] ? charCount[element] + 1 : 1;
  }

  return charCount;
};