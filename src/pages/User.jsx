import { useParams, Navigate } from "react-router-dom";
import styles from "../App.module.css";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import ErrorPage from "../pages/Error";

function User() {
  const { isLoggedIn, username } = useAuth();
  const { username: routeUsername } = useParams(); // Get the URL param (e.g., "Casper")

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
        <h2>User page goes here!</h2>
        <p>{username}'s user page!</p>
      </div>
      <Footer />
    </div>
  );
}

export default User;
