import React from "react";
import banner from "../assets/images/food.jpeg";
import { Link } from "react-router-dom";
import "../components/styles/home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>Food Corner</h1>
        <p>INDIAN FOOD AT CLICK</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
