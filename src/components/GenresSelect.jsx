import styles from "../App.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function GenresSelect({ onSelect, onSubmit, buttonText: customButtonText }) {
  const location = useLocation();
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

  const buttonText =
    customButtonText ||
    (location.pathname === "/randombygenre" ? "Find movie" : "Filter");

  function handleChange(e) {
    const genre = e.target.value;
    setSelectedGenre(genre);
    onSelect?.(genre);
  }

  function handleClick() {
    onSubmit?.(selectedGenre);
  }

  return (
    <div>
      <select
        className={styles.genreSelect}
        name="genres"
        id="genres"
        value={selectedGenre}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a genre
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button
        className={styles.genreButton}
        onClick={handleClick}
        disabled={!selectedGenre}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default GenresSelect;
