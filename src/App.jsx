import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Vision from "./pages/Vision";
import EndPoints from "./pages/Endpoints";
import AllMovies from "./pages/AllMovies";
import Random from "./pages/Random";
import User from "./pages/User";
import RandomByGenre from "./pages/RandomByGenre";
import Movie from "./pages/Movie";
import MoviesLayout from "./components/MovieLayout";

function App() {
  return (
    <div>
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/endpoints" element={<EndPoints />} />
              <Route path="/register" element={<Register />} />
              <Route path="/users/:username" element={<User />} />
              <Route path="/error" element={<Error />} />
              <Route path="/random" element={<Random />} />
              <Route path="/randombygenre" element={<RandomByGenre />} />
              <Route path="/movies" element={<MoviesLayout />}>
                <Route index element={<AllMovies />} />
                <Route path=":movieId" element={<Movie />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
