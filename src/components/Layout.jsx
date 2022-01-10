import styles from "./Layout.module.css";
import Social from "./Social";

export default function Layout({ name, image, description, next }) {
  return (
    <div className={styles.grid}>
      <span className="asset top">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="line"></span>
      </span>
      <img className="logo"
        src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/logo@2x.png"
        width="280"
        alt="logo"/>
      <div className={styles.socialArea}><Social /></div>
      <div className="navigation name"><a href="#">Name</a></div>
      <div className={styles.nameArea}>{name}</div>
      <div className={styles.imageArea}>{image}</div>

      <div className="navigation about"><a href="#">About</a></div>
      <div className={styles.descriptionArea}>{description}</div>

      <span className="asset bottom">
        <span className="line"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </span>
      <div className="learn-more">
        <span>learn more</span>
      </div>
      <div className={styles.nextArea}>{next}</div>
    </div>
  );
}
