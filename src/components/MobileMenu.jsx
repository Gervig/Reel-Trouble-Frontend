import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        &#9776; {/* Unicode hamburger icon */}
      </div>
      {open && (
        <div className={styles.dropdown}>
          <Link to="/" onClick={() => setOpen(false)}>
            HOME
          </Link>
          <Link to="/movies" onClick={() => setOpen(false)}>
            MOVIES
          </Link>
          <Link to="/vision" onClick={() => setOpen(false)}>
            VISION
          </Link>
          <Link to="/endpoints" onClick={() => setOpen(false)}>
            ENDPOINTS
          </Link>
          <a
            href="https://reeltrouble.dataduck.dk/api/routes"
            onClick={() => setOpen(false)}
          >
            API
          </a>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
