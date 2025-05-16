import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import facade from "../util/apiFacade";

function Register() {
  return (
    <div className="register-form">
      <Header />
      <p>Register below!</p>
      <RegisterForm facade={facade} />
      <Footer />
    </div>
  );
}

export default Register;
