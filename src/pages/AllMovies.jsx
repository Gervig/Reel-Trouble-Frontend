import styles from "../App.module.css";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useEffect, useState } from "react";
import { fetchData } from "../util/fetchData";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const URL = "https://reeltrouble.dataduck.dk/api/movies";

  function getMovies(callback) {
    fetchData(URL, callback);
  }

  useEffect(() => {
    getMovies((data) => setMovies(data));
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <MovieList movies={movies}/>
    </div>
  );
}

export default AllMovies;
