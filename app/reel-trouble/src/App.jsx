import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Vision from "./pages/Vision";
import EndPoints from "./pages/Endpoints";

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
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
