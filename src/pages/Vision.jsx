import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../App.module.css";

function Vision() {
  return (
    <div className={styles.container}>
      <Header />
      <h2>Vision of the API</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          ReelTrouble is an API that suggests movies based on user preferences.
        </li>
        <li className={styles.item}>
          A user can like movies, and therefore make sure the movies that are
          suggested aren't movies they have watched before.
        </li>
        <li className={styles.item}>
          A user can choose to get a movie suggestion within a specific genre or
          randomly.
        </li>
        <li className={styles.item}>
          Anyone can choose to get a movie suggestion within a specific genre,
          but here their like list is not included.
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Vision;
