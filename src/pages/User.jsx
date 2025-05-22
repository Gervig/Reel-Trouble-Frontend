import styles from "../App.module.css";

function User({ facade }) {
  return (
    <div>
      <h2>User page goes here!</h2>
          <p className={styles.userText}>
            Logged in as <strong>{facade.getUsername()}</strong>
          </p>
    </div>
  );
}

export default User;
