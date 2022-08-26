import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        Nature
      </Link>
      <Link className={styles.link} to="/sport">
        Sport
      </Link>
    </header>
  );
};
