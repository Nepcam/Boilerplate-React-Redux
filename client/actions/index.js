let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

const size = 1.4;

Math.floor(size);
//console.log(size);
Math.trunc(size);
//console.log(size);
Math.round(size);
console.log(size);