import React from "react";
import AboutImg from "../assets/images/fooda.jpeg";
import "../components/styles/about.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nisi
          laudantium porro accusantium corporis vel harum sit repellendus sequi
          dolor pariatur, repellat voluptates delectus ipsa? Officia corporis at
          iusto aliquid.
        </p>
      </div>
    </div>
  );
}

export default About;
