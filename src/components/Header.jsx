import { Link } from "react-router-dom";
import styles from "../App.module.css";
import facade from "../util/apiFacade";
import LoginForm from "./LoginForm";
import { useState } from "react";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const staticSrc =
    "https://raw.githubusercontent.com/Gervig/ReelTrouble/main/docs/reel_trouble.png";
  const gifSrc =
    "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/reeltrouble2.gif";

  return (
    <header>
      <Link
        to="/"
        className={styles.header}
        style={{ display: "block", textDecoration: "none" }}
      >
        <div>
          <img
            src={isHovered ? gifSrc : staticSrc}
            alt="Reel Trouble Logo"
            width="200"
            height="200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </Link>
      <LoginForm facade={facade} />
    </header>
  );
}

export default Header;
