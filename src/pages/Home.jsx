import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import styles from "../App.module.css";
import Dice from "../components/Dice";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

function Home() {
  const { isLoggedIn } = useAuth();

  const dice = {
    staticSrc:
      "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.png",
    gifSrc:
      "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.gif",
  };

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Welcome to Reel Trouble</h2>
      </div>
      <div className={styles.cardContainer}>
        {isLoggedIn ? (
          <div className={styles.cardContainer}>
            <FeatureCard
              className={styles.card}
              to="/random"
              imgStatic={dice.staticSrc}
              imgGif={dice.gifSrc}
              label="Random movie suggestion!"
            />
          </div>
        ) : (
          <div className={styles.content}>
            <h3>Login to use all of Reel Trouble's features</h3>
          </div>
        )}
        <div className={styles.cardContainer}>
          <FeatureCard
            className={styles.card}
            to="/randombygenre"
            imgStatic={dice.staticSrc}
            imgGif={dice.gifSrc}
            label="Random movie by genre!"
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
