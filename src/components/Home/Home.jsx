import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import "./home.css";

const Home = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div className="title container pd-1">
      <h1>
        {translations[currentLanguage].title} <span>Lucas Tamburlini</span>
      </h1>
      <p>
      {translations[currentLanguage].introduction_I}
        <br />
        {translations[currentLanguage].introduction_II}
      </p>
    </div>
  );
};

export default Home;
