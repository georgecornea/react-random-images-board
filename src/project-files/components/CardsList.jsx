import { Card } from './Card';
import styles from './CardsList.module.css';

export const CardsList = ({ cards }) => {
  return (
    <ul className={styles.cards}>
      {cards.map(({ id, imageUrl, size }) => (
        <Card key={id} imageUrl={imageUrl} id={id} size={size} />
      ))}
    </ul>
  );
};
