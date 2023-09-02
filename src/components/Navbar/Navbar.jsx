import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch.jsx";

import "../Navbar/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <img src="/logoWhiteLarge.png" alt="logo_white_large.png" />
      </div>
      <div className="navbar-assets">
        <LanguageSwitch />
        <div className={`navbar-links ${open ? "active" : ""}`}>
          <div>
            <ul>
              <li>
                <a href="#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={handleClick}>
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleClick}>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-toggle" onClick={handleClick}>
          {open ? (
            <CloseIcon className="menu-close" />
          ) : (
            <MenuIcon className="menu-open" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
