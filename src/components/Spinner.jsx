import loadingGif from "../assets/rt_loader.gif";
import styles from "../App.module.css";

function Spinner() {
  return (
    <div className={styles.spinner} >
      <img  src={loadingGif} alt="Loading..." width="100" />
    </div>
  );
}

export default Spinner;
