// надо сделать выборку из рандомных слов массива
// лучше изначально перемешать массим слов, а из него уже делать выборку [currIndex + 1]  (когда сработает нужный event)
// или можно кажый раз искать рандомное слово по индексу

export const randomizeWords = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
