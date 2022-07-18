import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from './Pages/Home/Home'; 
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Login />} path={"/login"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
