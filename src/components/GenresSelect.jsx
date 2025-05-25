import styles from "../App.module.css";
import { useLocation } from "react-router-dom";

function GenresSelect() {
  const location = useLocation();
  //TODO: get genres from API
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

  let buttonText = "";
  
  if(location.pathname === "/randombygenre") {
    buttonText = "Find movie";
  }

  function getRandomMovieByGenre(){

  }


  return (
    <div>
      <select className={styles.genreSelect} name="genres" id="genres">
        <option value="" disabled selected>
          Select a genre
        </option>
        {genres.map((genre) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
      <button className={styles.genreButton}>{buttonText}</button>
    </div>
  );
}

export default GenresSelect;
