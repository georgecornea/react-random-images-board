import styles from './RandomPhotosBoard.module.css';

export const RandomPhotosBoard = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};
