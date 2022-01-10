import styles from './Social.module.css'

export default function Social() {
  return(
    <div className={styles.social}>
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
    
  )
}