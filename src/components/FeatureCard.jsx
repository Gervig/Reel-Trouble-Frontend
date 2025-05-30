import styles from "../App.module.css";
import { Link } from "react-router-dom";
import Dice from "./Dice";
import { useState } from "react";

function FeatureCard({ to, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={to} className={styles.cardLink}>
      <div
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Dice isHovered={hovered}>{label}</Dice>
      </div>
    </Link>
  );
}

export default FeatureCard;
