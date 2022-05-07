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
import Employee from "./Pages/Employee";
import Manager from "./Pages/Manager";
import Coe from "./Pages/Coe";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>
        <Route element={<Employee />} path="/employee/:id" />
        <Route element={<Manager />} path="/manager/:id" />
        <Route element={<Coe />} path="/coe/:id" />
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return isAuth && user ? (
    <Navigate to={`/${user.role}/${user._id}`} />
  ) : (
    <Outlet />
  );
};

export default App;
