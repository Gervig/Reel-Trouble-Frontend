import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
