import { useSelector } from "react-redux";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import translations from "../../assets/translations";
import logoWhiteLarge from "../../assets/logoWhiteLarge.png";

import style from "./Footer.module.css";

const Footer = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <img src={logoWhiteLarge} alt="logo_white_large.png" />
      </div>
      <div className={style.phrase}>
        <p>{translations[currentLanguage].footer_text_I}</p>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lucastamburlini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/l.tamburlini/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lucastamburlini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.copyright}>
        {translations[currentLanguage].footer_text_II}
        Lucas Tamburlini
      </div>
      <div className={style.lighting}></div>
    </footer>
  );
};

export default Footer;
