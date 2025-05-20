import styles from "../App.module.css";

function MovieList({ movies }) {
  return (
    <div className={styles.content}>
      <h2>List of Movies</h2>
      <div className={styles.tableContainer}>
        <table className={styles.movieTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>IMDb rating</th>
              <th>Minutes</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} className={styles.movieTableRow}>
                <td>{movie.title}</td>
                <td>{movie.imdbRating}</td>
                <td>{movie.minutes}</td>
                <td>
                  {movie.releaseDate[2]}
                  {"-"}
                  {movie.releaseDate[1]}
                  {"-"}
                  {movie.releaseDate[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
