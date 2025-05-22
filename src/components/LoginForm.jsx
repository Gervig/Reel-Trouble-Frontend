import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

function LoginForm({ facade }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(facade.loggedIn());

  useEffect(() => {
    if (facade.loggedIn()) {
      setUsername(facade.getUsername());
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await facade.login(username, password);
      setIsLoggedIn(true);
      setError("");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Wrong username or password!");
      setError("Login failed: " + (err.message || "Invalid credentials"));
    }
  };

  const handleLogout = () => {
    facade.logout();
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.loginform}>
      {!facade.loggedIn() ? (
        <form onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} type="submit" id="bt-login">
            Login
          </button>
          <p className={styles.userText}>
            Don't have an account? <Link to="/register">Register here!</Link>
          </p>
        </form>
      ) : (
        <div className={styles.loginform}>
          <p className={styles.userText}>
            Logged in as{" "}
              <strong>{facade.getUsername()}</strong>
          </p>
          <button
            className={styles.button}
            type="button"
            id="bt-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
