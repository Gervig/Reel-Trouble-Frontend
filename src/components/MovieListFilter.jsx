import styles from "../App.module.css";
import GenresSelect from "./GenresSelect";

function MovieListFilter({ onGenreSelect, onSearchChange }) {
  return (
    <div className={styles.movieListFilter}>
      <input
        className={styles.movieListFilterInput}
        type="text"
        placeholder="Search"
        onChange={(e) => onSearchChange?.(e.target.value)}
      />
      <GenresSelect onSelect={onGenreSelect} />
    </div>
  );
}

export default MovieListFilter;
