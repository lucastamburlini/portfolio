import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch.jsx";
import logoWhiteLarge from "../../assets/logoWhiteLarge.png";

import style from "../Navbar/Navbar.module.css";
import styleApp from "../../App.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const hanldeScroll = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? style.scrolled : ""}`}>
      <div className={styleApp.container + " " + style.navContainer}>
        <div className={style.navbarLogo}>
          <img src={logoWhiteLarge} alt="logo_white_large.png" />
        </div>
        <div className={style.navbarAssets}>
          <LanguageSwitch />
          <div className={`${style.navbarLinks} ${open ? style.active : ""}`}>
            <div>
              <ul>
                <li>
                  <a href="#about" onClick={handleClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#stack" onClick={handleClick}>
                    Skills
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
          <div className={style.navbarToggle} onClick={handleClick}>
            {open ? (
              <CloseIcon className={style.menuClose} />
            ) : (
              <MenuIcon className={style.menuOpen} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
