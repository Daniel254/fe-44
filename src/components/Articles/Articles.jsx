import { Loader } from '../../UI/Loader/Loader';
import { Article } from '../Article/Article';
import styles from './Articles.module.css';

export const Articles = ({ items = [], isLoading }) => {
  return (
    <section className={styles.container}>
      {isLoading && <Loader />}
      {items.map(({ objectID, title, description, url }) => (
        <Article
          key={objectID}
          title={title}
          description={description}
          url={url}
        />
      ))}
    </section>
  );
};
