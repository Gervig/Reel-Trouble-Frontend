import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/Gervig/ReelTrouble/refs/heads/main/docs/reel_trouble.png"
          alt="Reel Trouble Logo"
          width="200"
          height="200"
        />
      </Link>
    </div>
  );
}

export default Header;
