import styles from "../App.module.css";

function Movie({ movie }) {
  return (
    <div className={styles.content}>
      <h2>{movie.title}</h2>
      <p>IMDb rating: {movie.imdbRating}</p>
      <p>Runtime: {movie.minutes} minutes</p>
      <p>
        Release:{" "}
        {`${String(movie.releaseDate[2]).padStart(2, "0")}-${String(
          movie.releaseDate[1]
        ).padStart(2, "0")}-${String(movie.releaseDate[0]).slice(-4)}`}
      </p>
    </div>
  );
}

export default Movie;
