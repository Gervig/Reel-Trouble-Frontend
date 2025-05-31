import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import GenresSelect from "../components/GenresSelect";
import styles from "../App.module.css";
import facade from "../util/apiFacade";
import { fetchData } from "../util/fetchData";
import Movie from "../components/Movie";
import LikeButton from "../components/LikeButton";

function RandomByGenre() {
  const { username, isLoggedIn } = useAuth();

  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userMovies, setUserMovies] = useState([]);

  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;

  function alreadyLiked(movie) {
    return userMovies.some((m) => m.id === movie.id);
  }

  function getUserMovies(callback) {
    fetchData(URL, callback);
  }

  function getRandomByGenre(genre) {
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
        <h2>Choose a genre to get a random movie!</h2>
        <GenresSelect onSubmit={getRandomByGenre} buttonText={"Find movie!"}/>
        {loading ? (
          <div className={styles.content}>
            <Spinner />
            <h2>loading...</h2>
          </div>
        ) : (
          <div className={styles.content}>
            {randomMovie && <Movie movie={randomMovie} />}
            {isLoggedIn && randomMovie && (
              <LikeButton
                movie={randomMovie}
                alreadyLiked={alreadyLiked(randomMovie)}
                onLike={like}
                onUnlike={unlike}
                text={
                  alreadyLiked(randomMovie)
                    ? "Unlike this movie! ❌"
                    : "Like this movie! 👍"
                }
                style={styles.randomButton}
              />
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default RandomByGenre;
