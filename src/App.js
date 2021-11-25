import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
