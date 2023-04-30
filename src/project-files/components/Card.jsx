import { useStore } from '../store/store';
import styles from './Card.module.css';

export const Card = ({ imageUrl, id, size }) => {
  const swap = useStore((state) => state.swap);
  const remove = useStore((state) => state.remove);
  const resize = useStore((state) => state.resize);

  return (
    <li className={styles.cards_item} id={id}>
      <div className={styles.card}>
        <div className=''>
          <img src={imageUrl} alt='' className={styles[`image_size_${size}`]} />
        </div>
        <div className={styles.card_content}>
          <button
            className='left'
            id={id}
            onClick={(e) => swap(e.target.id, 'left')}
          >
            {'<'}
          </button>
          <button
            className='left'
            id={id}
            onClick={(e) => swap(e.target.id, 'right')}
          >
            {'>'}
          </button>
          <button
            className='increase'
            id={id}
            onClick={(e) => resize(e.target.id, 'up')}
          >
            {'+'}
          </button>
          <button
            className='decrease'
            id={id}
            onClick={(e) => resize(e.target.id, 'down')}
          >
            {'-'}
          </button>
          <button
            className='delete'
            id={id}
            onClick={(e) => remove(e.target.id)}
          >
            {'X'}
          </button>
        </div>
      </div>
    </li>
  );
};
