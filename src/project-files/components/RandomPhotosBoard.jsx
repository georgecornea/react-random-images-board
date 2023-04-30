import { useStore } from '../store/store';
import { CardsList } from './CardsList';
import { MenuBar } from './MenuBar';
import styles from './RandomPhotosBoard.module.css';

export const RandomPhotosBoard = () => {
  const cards = useStore((state) => state.cards);

  return (
    <div className={styles.main}>
      <MenuBar />
      <CardsList cards={cards} />
    </div>
  );
};
