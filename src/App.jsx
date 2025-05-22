import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Vision from "./pages/Vision";
import EndPoints from "./pages/Endpoints";
import AllMovies from "./pages/AllMovies";
import User from "./pages/User";

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
              <Route path="/movies" element={<AllMovies />} />
              <Route path="/users/:username" element={<User />}/>
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
