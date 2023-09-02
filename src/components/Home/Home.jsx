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
        As a dedicated web developer, I craft sophisticated user-centric web
        experiences with meticulous attention to detail.
        <br />
        Let&apos;s bring your digital vision to life!
      </p>
    </div>
  );
};

export default Home;
