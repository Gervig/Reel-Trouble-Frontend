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

  const dice = ["https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.png", "https://raw.githubusercontent.com/Gervig/images-for-hosting/refs/heads/main/dice.gif"];

  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Welcome to Reel Trouble</h2>
        {isLoggedIn ? (
          <div className={styles.cardContainer}>
            <FeatureCard className={styles.card} to="/random" imgStatic={dice[0]} imgGif={dice[1]} label="Random movie suggestion!"/>
            <br />
          </div>
        ) : (
          <div className={styles.content}>
            <br />
            <h3>Login to use all of Reel Trouble's features</h3>
          </div>
        )}
        <h3>
          <Link to="/randombygenre">
            <Dice message={"Find a random movie by genre!"} />
          </Link>
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
