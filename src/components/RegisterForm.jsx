import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.module.css";


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
      setError("");
    } catch (err) {
      console.error("Register failed:", err);
      alert("Register failed");
      setError("Register failed: " + (err.message || "Invalid credentials"));
    }
  };

  return (
    <div className={styles.registerform}>
      <form onSubmit={handleRegister}>
        <input className={styles.input}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className={styles.input}
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default RegisterForm;
