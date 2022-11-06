import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Repos from "./pages/Repos/Repos";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/repos" exact element={<Repos />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
