import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import facade from "../util/apiFacade";

function Home() {
  return (
    <div>
      <Header />
      <h2>Welcome to Reel Trouble</h2>
      <LoginForm facade={facade}/>
      <Footer />
    </div>
  );
}

export default Home;
