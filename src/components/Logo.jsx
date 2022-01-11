import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/logo@2x.png"
      width="280"
      alt="logo"
    />
  );
}
