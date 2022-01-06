import { useEffect, useState } from 'react';
import './App.css';
// import Character from './components/Character';
import CharacterName from './components/CharacterName';
import CharacterImage from './components/CharacterImage';
import CharacterDescription from './components/CharacterDescription';
import CharacterPlaceholder from './components/CharacterPlaceholder';
import Layout from './components/Layout';
import API from './utils/api';

const api = new API();

function App() {

  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1))
      // const character = await api.getCharacter(1)
      // console.log(character);
    }
    getCharacter()
  }, [])

  return (
    <div className="App">
      {/* <Character /> */}
      <CharacterPlaceholder name={character.name} />
      <Layout
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} />}
        description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
      />


    </div>
  );
}

export default App;
