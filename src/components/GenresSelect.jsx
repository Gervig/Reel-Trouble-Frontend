import styles from "../App.module.css";
import { useState } from "react";

function GenresSelect({ onSelect, onSubmit, buttonText }) {
  const [selectedGenre, setSelectedGenre] = useState("");

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

  function handleChange(e) {
    const genre = e.target.value;
    setSelectedGenre(genre);

    // If there's an onSelect handler (live filtering), call it immediately
    onSelect?.(genre);
  }

  function handleClick() {
    if (selectedGenre) {
      onSubmit?.(selectedGenre);
    }
  }

  return (
    <div className={styles.genreContainer}>
      <select
        className={styles.genreSelect}
        name="genres"
        id="genres"
        value={selectedGenre}
        onChange={handleChange}
      >
        <option value="">Select a genre</option>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Only render the button if manual submission is intended */}
      {onSubmit && (
        <button
          className={styles.genreButton}
          onClick={handleClick}
          disabled={!selectedGenre}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default GenresSelect;
