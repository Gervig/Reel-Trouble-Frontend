import Footer from "../components/Footer";
import Header from "../components/Header";

function Vision() {
  return (
    <div>
      <Header />
      <h2>Vision of the API</h2>
      <p>
        ReelTrouble is An API that suggests movies based on user preferences.
      </p>
      <p>
        A user can like movies, and therefore make sure the movies that are
        suggested, aren't movies they have watched before.
      </p>
      <p>
        A user can choose to get a movie suggestion within a specific genre or
        randomly.
      </p>
      <p>
        Anyone can choose to get a movie suggestion within a specific genre, but
        here their like list is not included.
      </p>
      <Footer />
    </div>
  );
}

export default Vision;
