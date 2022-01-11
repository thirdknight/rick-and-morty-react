import styles from "./Layout.module.css";
import Social from "./Social";
import Logo from "./Logo";
import Dot from "./Dot";
import Line from "./Line";
import LearnMore from "./LearnMore";
import NavigationItem from "./NavigationItem";

export default function Layout({ name, image, description, next }) {
  return (
    <div className={styles.grid}>
      <span className={`${styles.verticalAlign} ${styles.assetTopArea}`}>
        <Dot />
        <Dot />
        <Dot />
        <Line />
      </span>
      <div className={styles.logoArea}><Logo /></div>
      
      <div className={styles.socialArea}><Social /></div>
      
      <div className={`${styles.navigationArea} ${styles.name}`}><NavigationItem url="#" text="Name" /></div>
      
      <div className={styles.nameArea}>{name}</div>
      <div className={styles.imageArea}>{image}</div>

      <div className={`${styles.navigationArea} ${styles.about}`}><NavigationItem url="#" text="About"/></div>
      <div className={styles.descriptionArea}>{description}</div>

      <span className={`${styles.verticalAlign} ${styles.assetBottomArea}`}>
        <Line />
        <Dot />
        <Dot />
        <Dot />
      </span>
      <div className={styles.learnMore}>
        <LearnMore />
      </div>
      <div className={styles.nextArea}>{next}</div>
    </div>
  );
}
