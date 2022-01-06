import { useEffect, useState } from 'react';
import './App.css';
// import Character from './components/Character';
import CharacterName from './components/CharacterName';
import CharacterImage from './components/CharacterImage';
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
      <div className="placeholder-container">
        <h1 id="character-name-placeholder" className="character-name-placeholder">
        </h1>
      </div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>

        <img className="logo" src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/logo@2x.png" width="280" alt="logo" />
        <div className="social">
          <a href="https://github.com/thirdknight/rick-and-morty-vanilla-js" target="_blank">
            <img src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/github-icon.svg" width="42" height="42" alt="github" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>

        <CharacterName name={character.name} />
        <CharacterImage image={character.image} name={character.name} />

        {/* <div id="character-name-container" className="character-name-container">
        </div> */}
        <div id="character-image-container" className="character-image-container">
        </div>
        <div className="navigation about">
          <a href="#">About</a>
        </div>
        <div id="character-description-container" className="character-description-container">
        </div>
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
        <div className="learn-more">
          <span>learn more</span>
        </div>
        <div id="load-next" className="arrow">
        </div>
      </div>
    </div>
  );
}

export default App;
