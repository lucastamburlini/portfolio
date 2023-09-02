import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions";

import './LanguageSwitch.css'

const LanguageSwitch = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="LanguageSwitch">
      <select onChange={handleLanguageChange}>
        {["English", "Español"].map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;
