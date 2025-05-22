import styles from "../App.module.css";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

function User() {
  const { isLoggedIn, username } = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        {isLoggedIn ? (
          <div>
            <h2>User page goes here!</h2>
            <p>{username}'s user page!</p>
          </div>
        ) : (
          <h2>You must first log in to see your user page!</h2>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default User;
