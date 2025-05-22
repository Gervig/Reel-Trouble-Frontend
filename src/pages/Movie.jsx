import styles from "../App.module.css";

function Movie({ movie }) {
  return (
    <div className={styles.content}>
      <h2>{movie.title}</h2>
      <h3>TODO: other movie info...</h3>
    </div>
  );
}

export default Movie;
