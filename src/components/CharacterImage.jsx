import styles from "./CharacterImage.module.css";

export default function CharacterImage({ image, name }) {
  return <img className={styles.characterImage} src={image} alt={name} />;
}
