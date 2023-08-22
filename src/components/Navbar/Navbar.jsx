import "../Navbar/navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <img
          src={"../../public/logoWhiteLarge.png"}
          alt={"logo_white_large.png"}
        />
      </div>
      <div className={`navbar-links ${open ? "active" : ""}`}>
        <div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-lenguage">English</div>
      </div>
      <div className="navbar-toggle" onClick={handleClick}>
        {open ? (
          <CloseIcon className="menu-close" />
        ) : (
          <MenuIcon className="menu-open" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
