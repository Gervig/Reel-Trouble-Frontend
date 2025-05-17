import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import facade from "../util/apiFacade";
import styles from "../App.module.css";


function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h2>Welcome to Reel Trouble</h2>
      <LoginForm facade={facade}/>
      <Footer />
    </div>
  );
}

export default Home;
