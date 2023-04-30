// functions used to manipulate photos array

// constants
const LEFT_DIRECTION = 'left';
const RIGHT_DIRECTION = 'right';
const UP_DIRECTION = 'up';
const DOWN_DIRECTION = 'down';

// swap elements in data array
export const swap = (data, id, direction) => {
  const currentIndex = data.findIndex((el) => el.id === parseInt(id, 10));

  if (direction === LEFT_DIRECTION) {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      [data[prevIndex], data[currentIndex]] = [
        data[currentIndex],
        data[prevIndex],
      ];
    }
  }

  if (direction === RIGHT_DIRECTION) {
    if (currentIndex < data.length - 1) {
      const nextIndex = currentIndex + 1;
      [data[currentIndex], data[nextIndex]] = [
        data[nextIndex],
        data[currentIndex],
      ];
    }
  }

  return data;
};

// images min and max sizes, and step to increase or decrease size
const MIN_SIZE = 150;
const MAX_SIZE = 250;
const STEP = 10;

// resize an image by 10px up or down
export const resize = (data, id, direction) => {
  const currentIndex = data.findIndex((el) => el.id === parseInt(id, 10));

  if (direction === UP_DIRECTION) {
    if (data[currentIndex].size < MAX_SIZE) {
      data[currentIndex].size = data[currentIndex].size + STEP;
    }
  }

  if (direction === DOWN_DIRECTION) {
    if (data[currentIndex].size > MIN_SIZE) {
      data[currentIndex].size = data[currentIndex].size - STEP;
    }
  }

  return data;
};

// remove a card and re-id each card in array
export const remove = (cards, id) => {
  cards = cards.filter((el) => el.id !== parseInt(id, 10));
  const newCards = cards.map((elem, id = 0) => ({ ...elem, id: id++ }));
  return newCards;
};
