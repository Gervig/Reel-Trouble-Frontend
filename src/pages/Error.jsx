import errorImg from "../assets/rt_logo_crying.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navrow from "../components/Navrow";
import styles from "../App.module.css";

function Error({ message }) {
  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <img src={errorImg} alt="rt_logo_crying" width="200" height="200" />
        <h2>Something went wrong, content could not be found!</h2>
        <h3>{message}</h3>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
