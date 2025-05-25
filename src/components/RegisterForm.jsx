import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";
import ErrorBubble from "./ErrorBubble";

function RegisterForm({ facade }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await facade.register(username, password);
      navigate("/");
      // Optionally, use a toast instead of alert:
      // setSuccess("Registration successful!")  // if you want a green bubble
      alert("Register successful, you can now login");
      setError("");
    } catch (err) {
      console.error("Register failed:", err);
      setError("Register failed: " + (err.message || "Invalid credentials"));
    }
  };

  return (
    <div className={styles.registerform}>
      <form onSubmit={handleRegister}>
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
        <button type="submit" id="bt-register" className={styles.button}>
          Register
        </button>
      </form>
      {error && <ErrorBubble message={"Register failed, please try again!"} />}
    </div>
  );
}

export default RegisterForm;
