import styles from "./NavigationItem.module.css";

export default function NavigationItem({ url, text }) {
  return (
    <a href={url} className={styles.NavigationItem}>
      {text}
    </a>
  );
}
