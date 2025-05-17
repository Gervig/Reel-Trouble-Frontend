function EndPoints() {
  return (
    <div>
      <h2>Endpoint Table</h2>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Endpoints
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Method</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Secured
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Description
            </th>
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
            <td>api/movies/movie/&#123;id&#125;</td>
            <td>GET</td>
            <td>❌</td>
            <td>Shows a movie with a given ID</td>
          </tr>
          <tr>
            <td>api/movies/genre/&#123;genre&#125;</td>
            <td>GET</td>
            <td>❌</td>
            <td>Shows movies with a given genre name</td>
          </tr>
          <tr>
            <td>api/movies/recommend/&#123;genre&#125;/&#123;id&#125;</td>
            <td>GET</td>
            <td>✅</td>
            <td>Shows recommendations based on user likes</td>
          </tr>
          <tr>
            <td>api/movies/random-movie/&#123;genre&#125;</td>
            <td>GET</td>
            <td>❌</td>
            <td>Shows random movie based on genre</td>
          </tr>
          <tr>
            <td>api/movies/like/&#123;id&#125;/&#123;movieId&#125;</td>
            <td>POST</td>
            <td>✅</td>
            <td>User likes a movie and preference is stored</td>
          </tr>
          <tr>
            <td>api/movies/history/&#123;id&#125;</td>
            <td>GET</td>
            <td>✅</td>
            <td>Shows a user’s liked movies</td>
          </tr>
          <tr>
            <td>api/admin/movies/add</td>
            <td>POST</td>
            <td>🔒</td>
            <td>Admins can add new movies to the DB</td>
          </tr>
          <tr>
            <td>api/movies/random/&#123;id&#125;</td>
            <td>GET</td>
            <td>✅</td>
            <td>Shows a random movie not liked by user</td>
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
    </div>
  );
}

export default EndPoints;
