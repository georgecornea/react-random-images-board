// empty array to add cards
export const initialData = [];

// defaults
const DEFAULT_CARDS = 10;
const DEFAULT_SIZE = 200;

// get a new random card
export const addCard = (cards) => {
  const id = cards.length > 0 ? cards.length : 0;
  return {
    id,
    imageUrl: `https://picsum.photos/${DEFAULT_SIZE}/${DEFAULT_SIZE}?sig=${id}`,
    size: DEFAULT_SIZE,
  };
};

// adds cards to initial data
const seedCards = (numberOfCards) => {
  let id = 0;
  while (id < numberOfCards) {
    initialData.push({
      id,
      imageUrl: `https://picsum.photos/${DEFAULT_SIZE}/${DEFAULT_SIZE}?sig=${id}`,
      size: DEFAULT_SIZE,
    });
    ++id;
  }
};

seedCards(DEFAULT_CARDS);

// generate an array with cards (default 10)
export const addCards = (cards, numberOfCards = DEFAULT_CARDS) => {
  cards = [];
  let id = 0;
  while (id < numberOfCards) {
    cards.push({
      id: id++,
      imageUrl: `https://picsum.photos/${DEFAULT_SIZE}/${DEFAULT_SIZE}?sig=${id}`,
      size: DEFAULT_SIZE,
    });
  }

  return cards;
};
