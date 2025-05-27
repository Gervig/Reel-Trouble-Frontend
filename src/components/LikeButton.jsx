import styles from "../App.module.css";
import { useState } from "react";

function LikeButton({ movie, alreadyLiked, onLike, onUnlike }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (alreadyLiked) {
      onUnlike(movie);
    } else {
      onLike(movie);
    }
  };

  let icon = "";
  if (alreadyLiked) {
    icon = hovered ? "❌" : "✅";
  } else {
    icon = hovered ? "👍" : "\u00A0"; // using '\u00A0' to always render something so table doesn't jump around
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={alreadyLiked ? styles.likeButtonLiked : styles.likeButton}
      title={alreadyLiked ? "Unlike this movie" : "Like this movie"}
    >
      {icon}
    </button>
  );
}

export default LikeButton;
