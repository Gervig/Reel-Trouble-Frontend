import { useParams, Navigate } from "react-router-dom";
import styles from "../App.module.css";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import ErrorPage from "../pages/Error";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";
import { fetchData } from "../util/fetchData";
import { useEffect, useState } from "react";

function User() {
  const { isLoggedIn, username } = useAuth();
  const { username: routeUsername } = useParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://reeltrouble.dataduck.dk/api/movies/history/" + username;

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

  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <Header />
        <Navrow />
        <div className={styles.content}>
          <h2>You must first log in to see your user page!</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (username !== routeUsername) {
    return <ErrorPage message="You do not have access to this page." />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h1>{username}'s user page!</h1>
        <h2>{username}'s like-list</h2>
        {loading ? (
          <div className={styles.content}>
            <Spinner />
            <h2>loading...</h2>
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default User;
