import { Link, useLocation } from "react-router-dom";

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
      <a href="https://github.com/Gervig/ReelTrouble" target="_blank">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          width="40"
        />
      </a>
    </div>
  );
}

export default Footer;
