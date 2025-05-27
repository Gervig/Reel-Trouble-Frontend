import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import GenresSelect from "../components/GenresSelect";
import styles from "../App.module.css";
import facade from "../util/apiFacade";
import Movie from "../components/Movie";

function RandomByGenre() {
  const { username } = useAuth();
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  function getRandomByGenre(genre) {
    console.log("selected genre: " + genre);
    if (!genre) {
      console.warn("Genre is null or empty, aborting fetch.");
      return;
    }

    setLoading(true);
    facade
      .randomByGenre(genre)
      .then((movie) => {
        setRandomMovie(movie);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch random movie by genre", err);
        setLoading(false);
      });
  }

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Choose a genre to get a random movie!</h2>
        <GenresSelect onSubmit={getRandomByGenre} />
        {loading ? (
          <div className={styles.content}>
            <Spinner />
            <h2>loading...</h2>
          </div>
        ) : (
          <div className={styles.content}>
            {randomMovie && <Movie movie={randomMovie} />}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default RandomByGenre;
