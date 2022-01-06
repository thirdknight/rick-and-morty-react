// import styles from "./CharacterImage.module.css";

export default function CharacterImage({ image, name }) {
  return (
    <>
      {/* <div className={styles.characterImageArea}> */}
        <img className="character-image" src={image} alt={name} />
      {/* </div> */}
    </>
  )
}
