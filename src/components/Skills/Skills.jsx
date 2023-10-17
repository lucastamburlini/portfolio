import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

import style from "./Skills.module.css";

const skills = [
  {
    icon: <TerminalIcon />,
    category: "Front End",
    items: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    className: "frontendSkill",
  },
  {
    icon: <StorageIcon />,
    category: "Back End",
    items: ["Node.js", "Express", "MongoDB"],
    className: "backendSkill",
  },
  {
    icon: <LayersIcon />,
    category: "Design",
    items: ["Adobe Photoshop", "Canva", "CorelDRAW"],
    className: "designSkill",
  },
  {
    icon: <BuildIcon />,
    category: "Testing and Additional Tools",
    items: [
      "Agile Methodologies",
      "Exploratory Testing",
      "Conventional Testing Methodologies",
      "Jest",
    ],
    className: "testingSkill",
  },
];

const Skills = () => {
  const currentLanguage = useSelector((state) => state.language);

  const skillsTop = skills.filter(
    (item) => item.category === "Front End" || item.category === "Design"
  );

  const skillsButton = skills.filter(
    (item) =>
      item.category === "Back End" ||
      item.category === "Testing and Additional Tools"
  );

  return (
    <div id="skills" className={style.skillsContainer}>
      <div className={style.skillsTitle}>
        <p>{translations[currentLanguage].skill_text_I}</p>
      </div>
      <div className={style.skillGroup}>
        <div className={style.skillGroupTop}>
          {skillsTop.map((item, index) => (
            <div key={index} className={style[item.className]} >
              <div>{item.icon}</div>
              <div>
                <h3>{item.category}</h3>
              </div>
              <div>
                {item.items.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={style.skillGroupButton}>
          {skillsButton.map((item, index) => (
            <div key={index} className={style[item.className]}>
              <div>{item.icon}</div>
              <div>
                <h3>{item.category}</h3>
              </div>
              <div>
                {item.items.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
