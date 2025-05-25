import Links from "./Links";
import MobileMenu from "./MobileMenu";
import LoginForm from "./LoginForm";
import facade from "../util/apiFacade";
import styles from "../App.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navrow() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navrow}>
      {isMobile ? <MobileMenu /> : <Links />}
      {location.pathname === "/register" ? null : <LoginForm facade={facade} />}
    </div>
  );
}

export default Navrow;
