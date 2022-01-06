import styles from "./CharacterPlaceholder.module.css";

export default function CharacterPlaceholder({ name }) {
  return (
    <div className={styles.placeholderContainer}>
      <h1 className={styles.characterNamePlaceholder}>{name}</h1>
    </div>
  );
}
