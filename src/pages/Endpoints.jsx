import Header from "../components/Header";
import Footer from "../components/Footer";
import Navrow from "../components/Navrow";
import styles from "../App.module.css";

function EndPoints() {
  return (
    <div className={styles.container}>
      <Header />
      <Navrow />
      <div className={styles.content}>
        <h1>Endpoints Table</h1>
        <div className={styles.tableContainer}>
          <table className={styles.endpointTable}>
            <thead>
              <tr>
                <th>Endpoints</th>
                <th>Method</th>
                <th>Secured</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>api/auth/register</td>
                <td>POST</td>
                <td>❌</td>
                <td>Create a new user</td>
              </tr>
              <tr>
                <td>api/auth/login</td>
                <td>POST</td>
                <td>❌</td>
                <td>Auth a user, return JWT token</td>
              </tr>
              <tr>
                <td>api/movies</td>
                <td>GET</td>
                <td>❌</td>
                <td>Shows all movies</td>
              </tr>
              <tr>
                <td>api/movies/movie/{`{id}`}</td>
                <td>GET</td>
                <td>❌</td>
                <td>Shows a movie with a given ID</td>
              </tr>
              <tr>
                <td>api/movies/genre/{`{genre}`}</td>
                <td>GET</td>
                <td>❌</td>
                <td>Shows movies with a given genre</td>
              </tr>
              <tr>
                <td>api/movies/recommend/{`{genre}/{id}`}</td>
                <td>GET</td>
                <td>✅</td>
                <td>Recommendations based on likes</td>
              </tr>
              <tr>
                <td>api/movies/random-movie/{`{genre}`}</td>
                <td>GET</td>
                <td>❌</td>
                <td>Random movie by genre</td>
              </tr>
              <tr>
                <td>api/movies/like/{`{id}/{movieId}`}</td>
                <td>POST</td>
                <td>✅</td>
                <td>User likes a movie</td>
              </tr>
              <tr>
                <td>api/movies/history/{`{id}`}</td>
                <td>GET</td>
                <td>✅</td>
                <td>Show user's liked movies</td>
              </tr>
              <tr>
                <td>api/admin/movies/add</td>
                <td>POST</td>
                <td>🔒</td>
                <td>Admins can add new movies</td>
              </tr>
              <tr>
                <td>api/movies/random/{`{id}`}</td>
                <td>GET</td>
                <td>✅</td>
                <td>Random movie not yet liked</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className={styles.pTableInfo}>
            ❌ <strong>= Not secured</strong> ✅ <strong>= User secured</strong>{" "}
            🔒 <strong>= Admin secured</strong>
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EndPoints;
