import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import imgAbout from "../../assets/imgAbout.jpg";

import style from "./About.module.css";

const About = () => {
  const currentLanguage = useSelector((state) => state.language);
  const currentTranslations = translations[currentLanguage];

  return (
    <div id="about" className={style.about}>
      <section className={style.aboutImg}>
        <img src={imgAbout} alt={imgAbout} />
      </section>
      <section className={style.aboutInfo}>
        <header>
          <h2>{currentTranslations.about_title}</h2>
        </header>
        <main>
          <p>{currentTranslations.about_text_I}</p>
          <p>{currentTranslations.about_text_II}</p>
        </main>
      </section>
    </div>
  );
};

export default About;
