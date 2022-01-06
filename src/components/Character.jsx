import { useEffect, useState } from 'react';
import styles from './Character.module.css';
import API from '../utils/api';


const api = new API();

export default function Character() {
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
    <>
      {character.name}
    </>
    
  )
}