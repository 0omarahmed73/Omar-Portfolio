import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
