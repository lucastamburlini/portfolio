import { useSelector } from "react-redux";
import translations from "../../assets/translations";

const Experiences = () => {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div id="experiences" className="experiences container pd-1">
      <h2>{translations[currentLanguage].experiences_title}</h2>
    </div>
  );
};

export default Experiences;