import styles from "../App.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function GenresSelect() {
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

  const buttonText = location.pathname === "/randombygenre" ? "Find movie" : "";

  function getRandomMovieByGenre() {
    console.log("Selected genre:", selectedGenre);
    // Add logic here to fetch or display a random movie by genre
  }

  return (
    <div>
      <select
        className={styles.genreSelect}
        name="genres"
        id="genres"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
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
        onClick={getRandomMovieByGenre}
        disabled={!selectedGenre}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default GenresSelect;
