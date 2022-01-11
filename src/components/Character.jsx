import {React} from "react";
import { useEffect, useState } from "react";
import styles from "./Character.module.css";
import CharacterName from "./CharacterName";
import CharacterImage from "./CharacterImage";
import CharacterDescription from "./CharacterDescription";
import CharacterPlaceholder from "./CharacterPlaceholder";
import Layout from "./Layout";
import api from "../utils/api";
import Next from "./Next";
import CharacterContext from "./CharacterContext";

export default function Character({ match }) {
  const [character, setCharacter] = useState({});
  console.log(match);
  useEffect(() => {
    
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1));
    }
    getCharacter();
  }, [match.params.id]);

  return (
    <div className={styles.Character}>
      <CharacterContext.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        <CharacterPlaceholder name={character.name} />
        <Layout
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={<CharacterImage image={character.image} />}
          description={
            <CharacterDescription
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          }
        />
      </CharacterContext.Provider>
    </div>
  );
}
