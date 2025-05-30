import styles from "../App.module.css";
import Movie from "../components/Movie";
import facade from "../util/apiFacade";
import { fetchData } from "../util/fetchData";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import LikeButton from "../components/LikeButton";

function Random() {
  const { isLoggedIn, username } = useAuth();

  const [randomMovie, setRandomMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [userMovies, setUserMovies] = useState([]);

  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;
  const URL_ALL = "https://reeltrouble.dataduck.dk/api/movies";

  function alreadyLiked(movie) {
    return userMovies.some((m) => m.id === movie.id);
  }



  function getRandomMovie() {
    setLoading(true);
    facade
      .random(username)
      .then((data) => {
        setRandomMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        err.fullError.then((e) => console.error("API Error:", e.message || e));
        setLoading(false);
      });
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

  function getUserMovies(callback) {
    fetchData(URL, callback);
  }

  function unlike(movie) {
    facade
      .unlike(username, movie.id)
      .then(() => {
        console.log(`Unliked movie: ${movie.title}`);
        // Refresh liked movies after unliking
        getUserMovies((data) => {
          setUserMovies(data);
        });
      })
      .catch((err) => {
        console.error("Failed to unlike movie", err);
      });
  }

  useEffect(() => {
    setLoading(true); // show spinner
    getRandomMovie();
    if (username) {
      getUserMovies((data) => {
        setUserMovies(data);
      });
    }
  }, [username]);

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
          <button className={styles.randomButton} onClick={getRandomMovie}>
            New random movie! 🎲
          </button>
          {isLoggedIn && (
            <LikeButton
              movie={randomMovie}
              alreadyLiked={alreadyLiked(randomMovie)}
              onLike={like}
              onUnlike={unlike}
              text={alreadyLiked(randomMovie) ? "Unlike this movie! ❌" : "Like this movie! 👍"}
              style={styles.randomButton}
            />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Random;
