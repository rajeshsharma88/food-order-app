import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../assets/images/logo.png";

import "../components/styles/navbar.css";

function Layout() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <nav className="rightSide">
        <Link to="/">Home</Link>

        <Link to="/menu">Menu</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
export default Layout;
