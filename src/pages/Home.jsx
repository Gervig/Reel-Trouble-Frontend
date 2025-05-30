import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import styles from "../App.module.css";
import { useAuth } from "../context/AuthContext";
import FeatureCard from "../components/FeatureCard";

function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.tableContent}>
        <h2>Welcome to Reel Trouble</h2>
        {!isLoggedIn && (
          <h3 className={styles.loginMessage}>
            Login to use all of Reel Trouble's features
          </h3>
        )}
      </div>
      <div className={styles.cardContainer}>
        {isLoggedIn ? (
          <div className={styles.cardContainer}>
            <FeatureCard to="/random" label="Random movie suggestion!" />
          </div>
        ) : (
          <></>
        )}
        <div className={styles.cardContainer}>
          <FeatureCard to="/randombygenre" label="Random movie by genre!" />
        </div>
      </div>
      <div className={styles.cardFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
