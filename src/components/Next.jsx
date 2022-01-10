
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import styles from './Next.module.css';
import api from '../utils/api';
import NProgress from 'nprogress';

export default function Next() {
  const context =  useContext(CharacterContext)

  async function handleClick() {
    NProgress.start()
    context.setCharacter(await api.getCharacter(context.character.id + 1))
    NProgress.done()
  }
  return(
    
    <div className={styles.next} onClick={handleClick}> </div>
    
  )
}