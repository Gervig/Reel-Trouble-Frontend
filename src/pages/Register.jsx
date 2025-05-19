import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import Navrow from "../components/Navrow";
import facade from "../util/apiFacade";
import styles from "../App.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h2>Register below!</h2>
      <RegisterForm facade={facade} />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
