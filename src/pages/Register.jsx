import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import facade from "../util/apiFacade";
import styles from "../App.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <Header />
      <p>Register below!</p>
      <RegisterForm facade={facade} />
      <Footer />
    </div>
  );
}

export default Register;
