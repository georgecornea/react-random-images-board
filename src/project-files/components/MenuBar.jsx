import { useStore } from '../store/store';

export const MenuBar = () => {
  const addCard = useStore((state) => state.addCard);
  const addCards = useStore((state) => state.addCards);
  const clearBoard = useStore((state) => state.clear);

  return (
    <div>
      <button
        className='px-4 py-1 mr-2 text-sm text-slate-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'
        onClick={addCards}
      >
        Generate Cards
      </button>
      <button
        className='px-4 py-1 mr-2 text-sm text-slate-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'
        onClick={addCard}
      >
        Add Card
      </button>
      <button
        className='px-4 py-1 mr-2 text-sm text-slate-800 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'
        onClick={clearBoard}
      >
        Clear Board
      </button>
    </div>
  );
};
