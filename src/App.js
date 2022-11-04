import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Repos from "./pages/Repos/Repos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/repos" exact element={<Repos />} />
      </Routes>
    </Router>
  );
}

export default App;
