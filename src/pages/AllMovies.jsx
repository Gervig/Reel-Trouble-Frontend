import styles from "../App.module.css";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useEffect, useState } from "react";
import { fetchData } from "../util/fetchData";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://reeltrouble.dataduck.dk/api/movies";

  function getMovies(callback) {
    fetchData(URL, callback);
  }

  useEffect(() => {
    setLoading(true); // show spinner
    getMovies((data) => {
      setMovies(data);
      setLoading(false); // hide spinner
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
          <h1>All movies</h1>
          <MovieList movies={movies} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AllMovies;
