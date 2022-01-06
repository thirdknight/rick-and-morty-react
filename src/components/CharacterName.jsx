import styles from "./CharacterName.module.css";

export default function CharacterName({ name }) {
  return (
    <div className={styles.CharacterName}>
        <h2>{name}</h2>
    </div>
  );
}
