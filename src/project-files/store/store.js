import { create } from 'zustand';
import { addCard, addCards, initialData } from './data';
import { remove, resize, swap } from './algorithm';

export const useStore = create((set) => ({
  cards: initialData,
  swap: (id, direction) =>
    set((state) => ({ cards: [...swap(state.cards, id, direction)] })),
  remove: (id) => set((state) => ({ cards: [...remove(state.cards, id)] })),
  resize: (id, direction) =>
    set((state) => ({ cards: [...resize(state.cards, id, direction)] })),
  addCard: () =>
    set((state) => ({ cards: [...state.cards, addCard(state.cards)] })),
  clear: () => set((state) => ({ cards: [] })),
  addCards: () => set((state) => ({ cards: [...addCards(state.cards)] })),
}));
