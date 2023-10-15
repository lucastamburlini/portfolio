import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import style from "./Home.module.css";
import styleApp from "../../App.module.css";

const Home = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div className={style.home + " " + styleApp.container}>
      <div className={style.title}>
        <h1>
          {translations[currentLanguage].title} <span>Lucas Tamburlini</span>
        </h1>
        <p>
          {translations[currentLanguage].introduction_I}
          <br />
          {translations[currentLanguage].introduction_II}
        </p>
      </div>
      <div className={style.contact}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lucasgabrieltamburlini/"
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
    </div>
  );
};

export default Home;
