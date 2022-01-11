import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <img
      className={styles.logo} src={require('../images/logo.png')}
      width="280"
      alt="logo"
    />
    
  );
}
