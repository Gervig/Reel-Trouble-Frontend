import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Gervig/ReelTrouble" target="_blank" >
        <img
          src="https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png"
          alt="GitHub"
          width="60"
        />
      </a>
    </div>
  );
}

export default Footer;
