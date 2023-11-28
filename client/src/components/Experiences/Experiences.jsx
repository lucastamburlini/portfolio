import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import style from './Experiences.module.css'

const Experiences = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div id="experiences" className={style.experiencesContainer}>
      <h2>{translations[currentLanguage].experiences_title}</h2>
      <div className={style.experiencesText}>
        <p>{translations[currentLanguage].experiences_text_I}</p>
      </div>
    </div>
  );
};

export default Experiences;
