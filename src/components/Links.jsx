import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Links() {
  return (
    <div className={styles.links}>
      <Link to="/">
        <strong>HOME</strong>
      </Link>
      <Link to="/movies">
        <strong>MOVIES</strong>
      </Link>
      <Link to="/vision">
        <strong>VISION</strong>
      </Link>
      <Link to="/endpoints">
        <strong>ENDPOINTS</strong>
      </Link>
      <Link to="https://reeltrouble.dataduck.dk/api/routes">
        <strong>API</strong>
      </Link>
    </div>
  );
}

export default Links;
