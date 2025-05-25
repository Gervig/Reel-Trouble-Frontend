import React, { useState, useEffect } from "react";
import styles from "../App.module.css";

const ErrorBubble = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the error after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Cleanup the timer if component unmounts early
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.formContainer}>
      <div
        className={styles.errorBubble}
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <strong>{message}</strong>
      </div>
    </div>
  );
};

export default ErrorBubble;
