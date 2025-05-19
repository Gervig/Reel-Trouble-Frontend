import Links from "./Links";
import LoginForm from "./LoginForm";
import facade from "../util/apiFacade";
import styles from "../App.module.css";
import { useLocation } from "react-router-dom";

function Navrow() {
  const location = useLocation();
  return (
    <div className={styles.navrow}>
      <Links />
      {location.pathname === "/register" ? (
        <></>
      ) : (
        <LoginForm facade={facade} />
      )}
    </div>
  );
}

export default Navrow;
