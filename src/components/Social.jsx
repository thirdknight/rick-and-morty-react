import styles from "./Social.module.css";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className={styles.social}>
      <a href="https://github.com/thirdknight/rick-and-morty-react">
        <IconContext.Provider
          value={{ color: "black", size: "42px" }}
          alt="github"
        >
          <div>
            <FaGithub />
          </div>
        </IconContext.Provider>
      </a>
      {/* <img
                src="http://rick-and-morty-vanilla-js.edinsonningles.com/public/github-icon.svg"
                width="42"
                height="42"
                alt="github"
              />
             */}
    </div>
  );
}
