import styles from "../App.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function FeatureCard({ to, imgStatic, imgGif, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={to} className={styles.cardLink}>
      <div
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? imgGif : imgStatic}
          alt={label}
          className={styles.cardImage}
        />
        <p className={styles.cardText}>{label}</p>
      </div>
    </Link>
  );
}

export default FeatureCard;
