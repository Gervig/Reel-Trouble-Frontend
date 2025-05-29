import styles from "../App.module.css";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../util/fetchData";
import { useEffect, useState } from "react";
import facade from "../util/apiFacade";
import LikeButton from "./LikeButton";

function MovieList({ movies }) {
  const { isLoggedIn, username } = useAuth();
  const [userMovies, setUserMovies] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;

  function getUserMovies(callback) {
    fetchData(URL, callback);
  }

  function like(movie) {
    facade
      .like(username, movie.id)
      .then(() => getUserMovies(setUserMovies))
      .catch((err) => console.error("Failed to like movie", err));
  }

  function unlike(movie) {
    facade
      .unlike(username, movie.id)
      .then(() => getUserMovies(setUserMovies))
      .catch((err) => console.error("Failed to unlike movie", err));
  }

  useEffect(() => {
    if (username) {
      getUserMovies(setUserMovies);
    }
  }, [username]);

  function handleSort(key) {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  }

  function isMovieLiked(movie) {
    return userMovies.some((m) => m.id === movie.id);
  }

  function sortMovies(movies) {
    if (!sortConfig.key) return movies;

    const sorted = [...movies];
    sorted.sort((a, b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      // Special case: liked
      if (sortConfig.key === "liked") {
        const aLiked = isMovieLiked(a) ? 1 : 0;
        const bLiked = isMovieLiked(b) ? 1 : 0;
        return sortConfig.direction === "asc"
          ? bLiked - aLiked
          : aLiked - bLiked;
      }

      if (sortConfig.key === "title") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      } else if (sortConfig.key === "releaseDate") {
        aVal = new Date(...aVal);
        bVal = new Date(...bVal);
      }

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }

  const sortedMovies = sortMovies(movies);

  return (
    <div className={styles.content}>
      <div className={styles.tableContainer}>
        <table className={styles.movieTable}>
          <thead>
            <tr>
              <th
                className={styles.thcenter}
                onClick={() => handleSort("title")}
                style={{ cursor: "pointer" }}
              >
                Title{" "}
                {sortConfig.key === "title" &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
              <th
                className={styles.thcenter}
                onClick={() => handleSort("imdbRating")}
                style={{ cursor: "pointer" }}
              >
                IMDb Rating{" "}
                {sortConfig.key === "imdbRating" &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
              <th
                className={styles.thcenter}
                onClick={() => handleSort("minutes")}
                style={{ cursor: "pointer" }}
              >
                Minutes{" "}
                {sortConfig.key === "minutes" &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
              <th
                className={styles.thcenter}
                onClick={() => handleSort("releaseDate")}
                style={{ cursor: "pointer" }}
              >
                Release{" "}
                {sortConfig.key === "releaseDate" &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
              {isLoggedIn && (
                <th
                  className={styles.thcenter}
                  onClick={() => handleSort("liked")}
                  style={{ cursor: "pointer" }}
                >
                  Like{" "}
                  {sortConfig.key === "liked" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map((movie) => {
              const alreadyLiked = isMovieLiked(movie);

              return (
                <tr key={movie.id} className={styles.movieTableRow}>
                  <td className={styles.tdleft}>
                    <strong>{movie.title}</strong>
                  </td>
                  <td className={styles.tdcenter}>{movie.imdbRating}</td>
                  <td className={styles.tdcenter}>{movie.minutes}</td>
                  <td className="date">
                    {`${String(movie.releaseDate[2]).padStart(2, "0")}-${String(
                      movie.releaseDate[1]
                    ).padStart(2, "0")}-${String(movie.releaseDate[0]).slice(
                      -4
                    )}`}
                  </td>
                  {isLoggedIn && (
                    <td className={styles.tdcenter}>
                      <LikeButton
                        movie={movie}
                        alreadyLiked={alreadyLiked}
                        onLike={like}
                        onUnlike={unlike}
                      />
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
