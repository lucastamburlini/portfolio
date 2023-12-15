import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import style from "./Hero.module.css";
import ButtonDownload from "../Button/ButtonDownload";

const Home = () => {
  const language = useSelector((state) => state.language);
  const {
    introduction_button,
    introduction_title,
    introduction_I,
    introduction_II,
  } = translations[language];

  return (
    <section id="home" className={style.heroContainer}>
      <div className={style.title}>
        <h1>{introduction_title}</h1>
        <div className={style.lighting}></div>
      </div>
      <div>
        <p>
          {introduction_I}
          <br />
          {introduction_II}
        </p>
      </div>
      <div className={style.homeButton}>
        <ButtonDownload text={introduction_button}></ButtonDownload>
      </div>
    </section>
  );
};

export default Home;
