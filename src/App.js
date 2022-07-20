import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home"; 
import Login from "./Pages/Login/Login";
import picturePath from "../src/Components/Carousel/pictures/kPQ.jpg";

const pictures = [
  {
    id: "p1",
    src: picturePath,
  },
  {
    id: "p2",
    src: picturePath,
  },
  {
    id: "p3",
    src: picturePath,
  },
];


function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route element={<Home pictures={pictures}/>} path={"/"} />
          <Route element={<Login />} path={"/login"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
