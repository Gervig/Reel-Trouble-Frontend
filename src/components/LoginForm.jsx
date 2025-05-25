import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { isLoggedIn, username, login, logout } = useAuth();
  const [inputUser, setInputUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset before new attempt
    try {
      await login(inputUser, password);
    } catch (err) {
      console.log("Login failed: " + err);
      setErrorMessage("Wrong username or password!");
    }
  };

  return (
    <div className={styles.loginform}>
      <div className={styles.formContainer}>
        {errorMessage && (
          <div className={styles.errorBubble}>{errorMessage}</div>
        )}
        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} type="submit">
              Login
            </button>
            <p className={styles.userText}>
              Don't have an account? <Link to="/register">Register here!</Link>
            </p>
          </form>
        ) : (
          <div className={styles.loggedInInfo}>
            <p className={styles.userText}>
              Logged in as{" "}
              <Link to={`/users/${username}`}>
                <strong>{username}</strong>
              </Link>
            </p>
            <button className={styles.button} onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
