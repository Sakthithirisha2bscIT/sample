import React from "react";
import Logo from "../assets/unnamed.png";
import "../App.css";  // <-- FIXED PATH

const Navbar = () => {
  return (
    <div>

      <div className="bg">
        <img className="prom" src={Logo} alt="Logo" />
        <p className="sw">Swiggy</p>
      </div>

      <nav className="navbar">
        <ul className="nav">
          <li>Swiggy Corporate</li>
          <li>Partner with us</li>
          <li>
            <button className="btn">Get The App</button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
