import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import imgAbout from "../../assets/imgAbout.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SectionTitles from "../SectionTitles/SectionTitles";

import style from "./About.module.css";

const About = () => {
  const currentLanguage = useSelector((state) => state.language);
  const currentTranslations = translations[currentLanguage];

  return (
    <>
      <SectionTitles id={"about"} text={currentTranslations.spanAbout} />
      <div  className={style.about}>
        <section className={style.aboutImg}>
          <img src={imgAbout} alt={imgAbout} />
        </section>
        <section className={style.aboutInfo}>
          <div className={style.aboutInfoContent}>
            <h2>{currentTranslations.about_title}</h2>
            <p>{currentTranslations.about_text_I}</p>
            <br />
            <p>{currentTranslations.about_text_II}</p>
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
        </section>
      </div>
    </>
  );
};

export default About;
