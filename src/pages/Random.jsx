import styles from "../App.module.css";
import Movie from "./Movie";
import facade from "../util/apiFacade";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";

function Random() {
  const { username } = useAuth();

  const [randomMovie, setRandomMovie] = useState();
  const [loading, setLoading] = useState(true);

  function getRandomMovie() {
    setLoading(true); // Optional, useful when pressing "New random movie!"
    facade
      .random(username)
      .then((data) => {
        setRandomMovie(data);
        setLoading(false); // ✅ Important: mark loading as done
      })
      .catch((err) => {
        err.fullError.then((e) => console.error("API Error:", e.message || e));
        setLoading(false); // ✅ Even on error, stop loading spinner
      });
  }

  function like(movie) {
    facade
      .like(username, movie.id)
      .then(() => {
        console.log(`Liked movie: ${movie.title}`);
      })
      .catch((err) => {
        console.error("Failed to like movie", err);
      });
  }

  useEffect(() => {
    getRandomMovie();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Your random movie is...!</h2>
      </div>

      {loading ? (
        <div className={styles.content}>
          <Spinner />
          <h2>loading...</h2>
        </div>
      ) : (
        <div className={styles.content}>
          <br />
          <br />
          <Movie movie={randomMovie} />
          <button className={styles.content} onClick={getRandomMovie}>
            New random movie!
          </button>
          <button className={styles.content} onClick={() => like(randomMovie)}>
            Like this movie!
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Random;
