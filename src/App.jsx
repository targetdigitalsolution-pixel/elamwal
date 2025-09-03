import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Banks } from "./screens/Banks/Banks";
import { News } from "./screens/News/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banks" element={<Banks />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;