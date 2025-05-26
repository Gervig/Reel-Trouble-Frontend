import styles from "../App.module.css";
import { useState } from "react";

function Dice({ message }) {
  const [isHovered, setIsHovered] = useState(false);

  const staticSrc =
    "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.png";
  const gifSrc =
    "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.gif";

  return (
    <div className={styles.content}>
      <img
        src={isHovered ? gifSrc : staticSrc}
        alt="Reel Trouble Dice"
        width="200"
        height="200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <h3
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {message}
      </h3>
    </div>
  );
}

export default Dice;
