import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import style from "./Home.module.css";

const Home = () => {
  const currentLanguage = useSelector((state) => state.language);
  const currentTranslations = translations[currentLanguage];

  return (
    <div className={style.home}>
      <header className={style.title}>
        <h1>Full Stack Developer</h1>
      </header>
      <main>
        <p>
          {currentTranslations.introduction_I}
          <br />
          {currentTranslations.introduction_II}
        </p>
        
      </main>
    </div>
  );
};

export default Home;
