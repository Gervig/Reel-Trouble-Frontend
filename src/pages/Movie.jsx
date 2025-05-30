import styles from "../App.module.css";
import { fetchData } from "../util/fetchData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://reeltrouble.dataduck.dk/api/movies/movie/" + movieId;

  function getMovie(callback) {
    fetchData(URL, callback);
  }

  useEffect(() => {
    setLoading(true);
    getMovie((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      {loading ? (
        <div className={styles.content}>
          <Spinner />
          <h2>loading...</h2>
        </div>
      ) : (
        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              {" "}
              <strong>Description:</strong> <br />
              {movie.description}
            </li>
            <li className={styles.item}>⭐ IMDb rating: {movie.imdbRating}</li>
            <li className={styles.item}>🕓 Runtime: {movie.minutes} minutes</li>
            <li className={styles.item}>
              📅 Release:{" "}
              {`${String(movie.releaseDate[2]).padStart(2, "0")}-${String(
                movie.releaseDate[1]
              ).padStart(2, "0")}-${String(movie.releaseDate[0]).slice(-4)}`}
            </li>
            {movie.directors &&
              (movie.directors.length > 1 ? (
                <div>
                  <br />
                  👥 <strong>Directors:</strong>
                </div>
              ) : (
                <div>
                  👤 <strong>Director:</strong>
                </div>
              ))}
            {movie.directors &&
              movie.directors.map((director) => (
                <li className={styles.item} key={director.id}>
                  {director.name}
                </li>
              ))}

            {movie.actors && (
              <div>
                🎭 <strong>Actors:</strong>
              </div>
            )}
            {movie.actors &&
              movie.actors.map((actor) => (
                <li className={styles.item} key={actor.id}>
                  {actor.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Movie;
