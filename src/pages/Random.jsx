import styles from "../App.module.css";
import Movie from "./Movie";
import facade from "../util/apiFacade";
import { useAuth } from "../context/AuthContext";
import { fetchData } from "../util/fetchData";
import { useEffect, useState } from "react";

function Random() {
  const { username } = useAuth();

  const [randomMovie, setRandomMovie] = useState();

  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;

  function getRandomMovie(callback) {
    facade.random(username, callback);
  }

  useEffect(() => {
    getRandomMovie((data) => {
      setRandomMovie(data);
    });
  }, [randomMovie]);

  return (
    <div className={styles.container}>
      <h2>Your random movie is...!</h2>
      <Movie />
      <button className={styles.content}>New random movie!</button>
      <button className={styles.likeButton}>Like this movie!</button>
    </div>
  );
}

export default Random;
