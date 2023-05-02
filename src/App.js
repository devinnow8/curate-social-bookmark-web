import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
