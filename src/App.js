import { useEffect, useState } from 'react';
import './App.css';
import './nprogress.css';
import CharacterName from './components/CharacterName';
import CharacterImage from './components/CharacterImage';
import CharacterDescription from './components/CharacterDescription';
import CharacterPlaceholder from './components/CharacterPlaceholder';
import Layout from './components/Layout';
import api from './utils/api';
import Next from './components/Next';
import CharacterContext from './components/CharacterContext';

function App() {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1))
    }
    getCharacter()
  }, [])

  return (
    <CharacterContext.Provider value={{
      character,
      setCharacter
    }}>
      <CharacterPlaceholder name={character.name} />
      <Layout
        next={<Next />}
        name={<CharacterName name={character.name} />}
        image={<CharacterImage image={character.image} />}
        description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
      />
    </CharacterContext.Provider>
  );
}

export default App;
