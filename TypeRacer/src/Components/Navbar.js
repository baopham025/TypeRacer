import { useState } from "react";
import "./Stylings/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's open/closed state
  const [navToggle, setNavToggle] = useState("closed");

  // Function to toggle the navbar open/close on mobile views
  const handleNavToggle = () => {
    setNavToggle(navToggle === "closed" ? "open" : "closed");
  };

  return (
    <nav className="navbar">
      {/* Icon and App name*/}
      <p className="nav-brand">
        <FontAwesomeIcon icon={faKeyboard} />TypeRacer
      </p>

      {/* Four nav items*/}
      <ul className={`nav-items ${navToggle}`}>
    
        <li className="nav-item">
          <NavLink
            tag={Link}
            to="/typeracer"
            onClick={handleNavToggle}
            activeStyle={{ borderBottom: "2px solid var(--text-secondary)" }}
          > Practice
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/statistics"
            onClick={handleNavToggle}
            activeStyle={{ borderBottom: "2px solid var(--text-secondary)" }}
          > Statistics
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/about"
            onClick={handleNavToggle}
            activeStyle={{ borderBottom: "2px solid var(--text-secondary)" }}
          > About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/user"
            onClick={handleNavToggle}
            activeStyle={{ borderBottom: "2px solid var(--text-secondary)" }}
          > User
          </NavLink>
        </li>
      </ul>

      {/*Hamburger menu*/}
      <button className={`nav-btn ${navToggle}`} onClick={handleNavToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
