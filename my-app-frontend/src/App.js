import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import RepoDetails from "./pages/RepoDetails";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/user/:username/repo/:repo" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}
