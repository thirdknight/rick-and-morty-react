
import { useContext } from 'react';
import CharacterContext from './CharacterContext';
import styles from './Next.module.css';
// import api from '../utils/api';
import NProgress from 'nprogress';
import { useHistory } from 'react-router-dom';

export default function Next() {
  const context =  useContext(CharacterContext)
  const history = useHistory()

  async function handleClick() {
    NProgress.start()
    history.push(`${process.env.PUBLIC_URL}/${context.character.id + 1}`)
    NProgress.done()
  }
  return(
    
    <div className={styles.next} onClick={handleClick}> </div>
    
  )
}