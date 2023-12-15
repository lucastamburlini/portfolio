import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import SectionTitles from "../SectionTitles/SectionTitles";
import { skills } from "./skills";

import style from "./Stack.module.css";

const Stack = () => {
  const currentLanguage = useSelector((state) => state.language);
  const currentTranslations = translations[currentLanguage];

  return (
    <>
      <section className={style.stackContainer}>
      <SectionTitles id={"stack"} text={currentTranslations.spanStack} />
        <div className={style.boxStackContainer}>
          {skills.map((item, index) => (
            <div key={index} className={style.boxStack}>
              <div className={style.boxStackImg}>{item.icon}</div>
              <div className={style.boxStackText}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Stack;
