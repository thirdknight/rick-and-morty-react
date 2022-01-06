import styles from './Layout.module.css';

export default function Layout({ name, image, description }) {
  return (
    <div className="grid">
      <span className="asset top">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="line"></span>
      </span>

      <img
        className="logo"
        src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/logo@2x.png"
        width="280"
        alt="logo"
      />
      <div className="social">
        <a
          href="https://github.com/thirdknight/rick-and-morty-vanilla-js"
          target="_blank"
        >
          <img
            src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/github-icon.svg"
            width="42"
            height="42"
            alt="github"
          />
        </a>
      </div>
      <div className="navigation name">
        <a href="#">Name</a>
      </div>
      <div className={styles.characterNameArea}>
      {name}
      </div>
      <div className={styles.characterImageArea}>
      {image}
      </div>
      

      {/* <CharacterName name={character.name} /> */}
      {/* <CharacterImage image={character.image} name={character.name} /> */}

      <div className="navigation about">
        <a href="#">About</a>
      </div>
      <div className={styles.characterDescriptionArea}>
      {description}
      </div>
      

      {/* <CharacterDescription gender={character.gender} species={character.species} status={character.status} /> */}

      <span className="asset bottom">
        <span className="line"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </span>
      <div className="learn-more">
        <span>learn more</span>
      </div>
      <div id="load-next" className="arrow"></div>
    </div>
  );
}
