import styles from "../App.module.css";

function Dice({ isHovered, children }) {
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
      />
      <p className={styles.cardText}>{children}</p>
    </div>
  );
}

export default Dice;
