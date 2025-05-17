import Header from "../components/Header";
import Footer from "../components/Footer";

function EndPoints() {
  const tableStyle = {
    width: "50%",
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    fontSize: "14px",
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "6px 10px",
    textAlign: "left",
  };

  return (
    <div>
      <Header />
      <h2>Endpoint Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Endpoints</th>
            <th style={thTdStyle}>Method</th>
            <th style={thTdStyle}>Secured</th>
            <th style={thTdStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>api/auth/register</td>
            <td style={thTdStyle}>POST</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Create a new user</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/auth/login</td>
            <td style={thTdStyle}>POST</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Auth a user, return JWT token</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Shows all movies</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies/movie/&#123;id&#125;</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Shows a movie with a given ID</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies/genre/&#123;genre&#125;</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Shows movies with a given genre name</td>
          </tr>
          <tr>
            <td style={thTdStyle}>
              api/movies/recommend/&#123;genre&#125;/&#123;id&#125;
            </td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>✅</td>
            <td style={thTdStyle}>Shows recommendations based on user likes</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies/random-movie/&#123;genre&#125;</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>❌</td>
            <td style={thTdStyle}>Shows random movie based on genre</td>
          </tr>
          <tr>
            <td style={thTdStyle}>
              api/movies/like/&#123;id&#125;/&#123;movieId&#125;
            </td>
            <td style={thTdStyle}>POST</td>
            <td style={thTdStyle}>✅</td>
            <td style={thTdStyle}>
              User likes a movie and preference is stored
            </td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies/history/&#123;id&#125;</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>✅</td>
            <td style={thTdStyle}>Shows a user’s liked movies</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/admin/movies/add</td>
            <td style={thTdStyle}>POST</td>
            <td style={thTdStyle}>🔒</td>
            <td style={thTdStyle}>Admins can add new movies to the DB</td>
          </tr>
          <tr>
            <td style={thTdStyle}>api/movies/random/&#123;id&#125;</td>
            <td style={thTdStyle}>GET</td>
            <td style={thTdStyle}>✅</td>
            <td style={thTdStyle}>Shows a random movie not liked by user</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>❌</strong> = Not secured
        <br />
        <strong>✅</strong> = User secured
        <br />
        <strong>🔒</strong> = Admin secured
      </p>
      <Footer />
    </div>
  );
}

export default EndPoints;
