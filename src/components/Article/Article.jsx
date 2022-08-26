import { Button } from '../../UI/Button/Button';
import styles from './Article.module.css';

export const Article = ({ title, description, url }) => {
  return (
    <div className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <Button href={url}>View article</Button>
    </div>
  );
};
