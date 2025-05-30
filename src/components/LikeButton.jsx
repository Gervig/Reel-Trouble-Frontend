import styles from "../App.module.css";
import { useState } from "react";

function LikeButton({ movie, alreadyLiked, onLike, onUnlike, text, style }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (alreadyLiked) {
      onUnlike(movie);
    } else {
      onLike(movie);
    }
  };

  let icon = "";
  if (alreadyLiked && !text) {
    icon = hovered ? "❌" : "✅";
  } else if (!text) {
    icon = hovered ? "👍" : "\u00A0"; // using '\u00A0' to always render something so table doesn't jump around
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={
        style
          ? style
          : alreadyLiked
          ? styles.likeButtonLiked
          : styles.likeButton
      }
      title={alreadyLiked ? "Unlike this movie" : "Like this movie"}
    >
      {text} {icon}
    </button>
  );
}

export default LikeButton;
