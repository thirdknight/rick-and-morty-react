import styles from "./CharacterDescription.module.css";

export default function CharacterDescription({ gender, species, status }) {
  return (
    // <div className={styles.characterDescription}>
      <div>
        <h3 className={styles.characterLabel}>Gender: {gender}</h3>
        <h3 className={styles.characterLabel}> Species: {species}</h3>
        <h3 className={styles.characterLabel}>Stauts: {status}</h3>
      {/* </div> */}
    </div>
  );
}
 