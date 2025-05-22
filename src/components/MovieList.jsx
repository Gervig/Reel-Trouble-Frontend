import styles from "../App.module.css";

function MovieList({ movies }) {
  return (
    <div className={styles.content}>
      <h2>List of Movies</h2>
      <div className={styles.tableContainer}>
        <table className={styles.movieTable}>
          <thead>
            <tr>
              <th className={styles.thcenter}>Title</th>
              <th className={styles.thcenter}>IMDb rating</th>
              <th className={styles.thcenter}>Minutes</th>
              <th className={styles.thcenter}>Release</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} className={styles.movieTableRow}>
                <td className={styles.tdleft}><strong>{movie.title}</strong></td>
                <td className={styles.tdcenter}>{movie.imdbRating}</td>
                <td>{movie.minutes}</td>
                <td className="date">
                  {`${String(movie.releaseDate[2]).padStart(2, "0")}-${String(
                    movie.releaseDate[1]
                  ).padStart(2, "0")}-${String(movie.releaseDate[0]).slice(
                    -4
                  )}`}
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
