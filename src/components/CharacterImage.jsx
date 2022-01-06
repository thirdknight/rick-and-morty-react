import styles from "./CharacterImage.module.css";

export default function CharacterImage({ image, name }) {
  return (
    <>
      {image}
      <img className="character-image" src={image} alt={name} />
    </>
  )
}
