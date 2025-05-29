import styles from "../App.module.css";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import { useEffect, useState } from "react";
import { fetchData } from "../util/fetchData";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import MovieListFilter from "../components/MovieListFilter";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const URL = "https://reeltrouble.dataduck.dk/api/movies";

  function getMovies(callback) {
    fetchData(URL, callback);
  }

  useEffect(() => {
    setLoading(true);
    getMovies((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre
      ? movie.genres?.some((genreObj) => genreObj.name === selectedGenre)
      : true;
    const matchesSearch = searchTerm
      ? movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesGenre && matchesSearch;
  });

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
        <div className={styles.tableContent}>
          <h1>All movies</h1>
          <MovieListFilter
            onGenreSelect={setSelectedGenre}
            onSearchChange={setSearchTerm}
          />
          <MovieList movies={filteredMovies} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AllMovies;
