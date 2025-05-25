import styles from "../App.module.css";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../util/fetchData";
import { useEffect, useState } from "react";
import facade from "../util/apiFacade";

function MovieList({ movies }) {
  const { isLoggedIn, username } = useAuth();

  const [userMovies, setUserMovies] = useState([]);

  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;

  function getUserMovies(callback) {
    fetchData(URL, callback);
  }

  function like(movie) {
    facade
      .like(username, movie.id)
      .then(() => {
        console.log(`Liked movie: ${movie.title}`);
        // Refresh liked movies after liking
        getUserMovies((data) => {
          setUserMovies(data);
        });
      })
      .catch((err) => {
        console.error("Failed to like movie", err);
      });
  }

  useEffect(() => {
    if (username) {
      getUserMovies((data) => {
        setUserMovies(data);
      });
    }
  }, [username]);

  return (
    <div className={styles.content}>
      <div className={styles.tableContainer}>
        <table className={styles.movieTable}>
          <thead>
            <tr>
              <th className={styles.thcenter}>Title</th>
              <th className={styles.thcenter}>IMDb rating</th>
              <th className={styles.thcenter}>Minutes</th>
              <th className={styles.thcenter}>Release</th>
              {isLoggedIn && <th className={styles.thcenter}>Like</th>}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const alreadyLiked = userMovies.some((m) => m.id === movie.id);

              return (
                <tr key={movie.id} className={styles.movieTableRow}>
                  <td className={styles.tdleft}>
                    <strong>{movie.title}</strong>
                  </td>
                  <td className={styles.tdcenter}>{movie.imdbRating}</td>
                  <td>{movie.minutes}</td>
                  <td className="date">
                    {`${String(movie.releaseDate[2]).padStart(2, "0")}-${String(
                      movie.releaseDate[1]
                    ).padStart(2, "0")}-${String(movie.releaseDate[0]).slice(
                      -4
                    )}`}
                  </td>
                  {isLoggedIn && (
                    <td className={styles.tdcenter}>
                      <button
                        className={styles.likeButton}
                        onClick={() => like(movie)}
                        disabled={alreadyLiked}
                        title={
                          alreadyLiked ? "Already liked" : "Like this movie"
                        }
                      >
                        {alreadyLiked ? "✅" : "👍"}
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieList;
