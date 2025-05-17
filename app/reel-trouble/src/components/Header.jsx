import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Header() {
  return (
    <Link to="/" className={styles.header} style={{ display: "block", textDecoration: "none" }}>
      <div>
        <img
          src="https://raw.githubusercontent.com/Gervig/ReelTrouble/refs/heads/main/docs/reel_trouble.png"
          alt="Reel Trouble Logo"
          width="200"
          height="200"
        />
      </div>
    </Link>
  );
}

export default Header;
