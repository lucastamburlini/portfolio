import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch.jsx";
import logoWhiteLarge from "../../assets/logoWhiteLarge.png";
import { useSelector } from "react-redux";
import translations from "../../assets/translations.js";

import style from "../Navbar/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const language = useSelector((state) => state.language);
  const { home, projects, about, experiences, skills } = translations[language];
  const navigate = useNavigate();

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

  const handleToProjects = () => {
    event.preventDefault();
    navigate("/projects");
    window.scrollTo({ top: 0 });
  };

  const handleToHome = () => {
    event.preventDefault();
    window.scrollTo({ top: 0 });
    navigate("/");
  };

  const handleToLayout = (sectionId) => {

    navigate("/");
  

  };

  return (
    <nav className={`${scrolled ? style.scrolled : ""}`}>
      <div className={style.navContainer}>
        <div className={style.navbarLogo}>
          <img src={logoWhiteLarge} alt="logo_white_large.png" />
        </div>
        <div className={style.navbarAssets}>
          <LanguageSwitch />
          <div className={`${style.navbarLinks} ${open ? style.active : ""}`}>
            <div>
              <ul>
                <li>
                  <a
                    href=""
                    onClick={() => {
                      handleClick();
                      handleToHome();
                    }}
                  >
                    {home}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={() => {
                      handleClick();
                      handleToProjects();
                    }}
                  >
                    {projects}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => {
                      handleClick();
                      handleToLayout();
                    }}
                  >
                    {about}
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    onClick={() => {
                      handleClick();
                      handleToLayout();
                    }}
                  >
                    {experiences}
                  </a>
                </li>
                <li>
                  <a
                    href="#stack"
                    onClick={() => {
                      handleClick();
                      handleToLayout();
                    }}
                  >
                    {skills}
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
