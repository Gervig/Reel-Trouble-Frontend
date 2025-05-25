// import styles from "../App.module.css";

function GenresSelect() {
  //TODO: get genres from API
  const genres = [
    "Science Fiction",
    "Action",
    "Thriller",
    "Family",
    "Fantasy",
    "Animation",
    "Adventure",
    "Comedy",
    "Crime",
    "Romance",
    "Horror",
    "Drama",
    "Mystery",
    "War",
    "Music",
    "History",
    "Western",
    "TV Movie",
    "Documentary",
  ];

  return (
    <div>
      <select name="genres" id="genres">
        {genres.map((genre) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
    </div>
  );
}

export default GenresSelect;
