import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import style from './About.module.css';

const About = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div id="about" className={style.about}>
      <h2>{translations[currentLanguage].about_title}</h2>
      <p>{translations[currentLanguage].about_text_I}</p> <br />
      <p>{translations[currentLanguage].about_text_II}</p>
      <br />
      <p>{translations[currentLanguage].about_text_III}</p>
    </div>
  );
};

export default About;
