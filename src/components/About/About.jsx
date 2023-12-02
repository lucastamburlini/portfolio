import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import imgAbout from "../../assets/imgAbout.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SectionTitles from "../SectionTitles/SectionTitles";

import style from "./About.module.css";

const About = () => {
  const language = useSelector((state) => state.language);
  const { spanAbout, about_title, about_text_I, about_text_II } =
    translations[language];

  return (
    <section id="about" className={style.about}>
      <SectionTitles text={spanAbout} />
      <div className={style.cardAbout}>
        <div className={style.cardImg}>
          <img src={imgAbout} alt="About" />
        </div>

        <div className={style.cardInfo}>
          <div className={style.cardInfoText}>
            <h2>{about_title}</h2>
            <p>{about_text_I}</p>
            <br />
            <p>{about_text_II}</p>
            <div className={style.cardContact}>
              <ul className={style.socialIcons}>
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
        </div>
      </div>
    </section>
  );
};

export default About;
