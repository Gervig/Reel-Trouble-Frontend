import styles from "../App.module.css";
import { useRef } from "react";

function GenresSelectUncontrolled({ onSubmit, buttonText }) {
  const selectRef = useRef(null);

  const genres = [
    "Science Fiction",
    "Action",
    "Thriller",
    "Family",
    "Fantasy",
    "Animation",
    "Adventure",
    "Comedy",
    "Crime",
    "Romance",
    "Horror",
    "Drama",
    "Mystery",
    "War",
    "Music",
    "History",
    "Western",
    "TV Movie",
    "Documentary",
  ];

  function handleClick() {
    const genre = selectRef.current.value;
    if (genre && onSubmit) {
      onSubmit(genre);
    }
  }

  return (
    <div className={styles.genreContainer}>
      <select
        className={styles.genreSelect}
        name="genres"
        id="genres"
        ref={selectRef} // 🔸 Uncontrolled: useRef instead of useState
        defaultValue="" // Optional: set initial value
      >
        <option value="">Select a genre</option>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <button className={styles.genreButton} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default GenresSelectUncontrolled;
