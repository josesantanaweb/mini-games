const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const shuffleWordArray = (numberChickens: number, numberBones: number) => {
  let arrayWord = [];
  for (let i = 0; i < numberChickens; i++) {
    arrayWord.push("chicken");
  }

  for (let i = 0; i < numberBones; i++) {
    arrayWord.push("bone");
  }
  return shuffle(arrayWord);
};

export const createArrayBoard = (array: string[]) => {
  const newArray = array.map((name: any, i: any) => ({
    id: i,
    name,
    visibled: false,
  }));
  return newArray;
};
