import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppWrapper = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div style={{ "--nav-color": isLanding ? "white" : "#222" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
