import styles from './Button.module.css';

export const Button = ({ children, href, ...restProps }) => {
  if (href) {
    return (
      <a {...restProps} href={href} className={styles.button}>
        {children}
      </a>
    );
  }
  return (
    <button {...restProps} className={styles.button}>
      {children}
    </button>
  );
};
