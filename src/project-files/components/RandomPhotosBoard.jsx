import { MenuBar } from './MenuBar';
import styles from './RandomPhotosBoard.module.css';

export const RandomPhotosBoard = () => {
  return (
    <div className={styles.main}>
      <MenuBar />
      Photos Board
    </div>
  );
};
