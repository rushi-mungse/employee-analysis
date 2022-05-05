import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Authenticate from "./Authenticate";
import { useSelector } from "react-redux";
import "./App.css";
import Dashbord from "./Pages/Dashbord";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<Dashbord />} path="/dashbord" />
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  return isAuth ? <Navigate to={"/dashbord"} /> : <Outlet />;
};

export default App;
