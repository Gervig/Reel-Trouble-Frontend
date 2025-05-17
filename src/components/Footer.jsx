import { Link, useLocation } from "react-router-dom";
// import styles from "../App.module.css";

function Footer() {
  const location = useLocation();

  return (
    <div>
      {/* only shows the link to the vision page, if you're not on the vision page */}
      {location.pathname === "/vision" ? (
        <p></p>
      ) : (
        <p>
          Read about the vison for the API <Link to="/vision">here!</Link>
        </p>
      )}
      {/* same logic with link to endpoints table */}
      {location.pathname === "/endpoints" ? (
        <p></p>
      ) : (
        <p>
          See an endpoints table of the API <Link to="/endpoints">here!</Link>
        </p>
      )}
      {/* github repo link */}
      <a href="https://github.com/Gervig/ReelTrouble" target="_blank" >
        <img
          src="https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png"
          alt="GitHub"
          width="60"
        />
      </a>
    </div>
  );
}

export default Footer;
