import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import TopBar from "./Components/TopBar";
import Dashboard from "./Components/dashboard/Dashboard";
import Buttons from "./Components/componentsPage/Buttons";
import Cards from "./Components/componentsPage/Cards";
import BlankPage from "./Components/pages/BlankPage";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import ForgotPassword from "./Components/pages/ForgotPassword";
import NotFound from "./Components/pages/NotFound";
import Portal from "./Components/Portal";
import Colors from "./Components/utilities/Colors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate to="/portal/dashboard" />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="colors"element={<Colors />} />
        </Route>
      </Routes>

      {/* <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/blank-page" element={<BlankPage />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
