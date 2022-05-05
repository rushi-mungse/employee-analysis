import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Authenticate from "./Authenticate";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
