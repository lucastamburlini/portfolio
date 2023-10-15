import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";

import style from "./Skills.module.css";

const skills = [
  {
    icon: <TerminalIcon />,
    category: "Front End",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Redux" },
    ],
  },
  {
    icon: <StorageIcon />,
    category: "Back End",
    items: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
  },
  {
    icon: <LayersIcon />,
    category: "Design",
    items: [
      { name: "Adobe Photoshop" },
      { name: "Canva" },
      { name: "CorelDRAW" },
    ],
  },
  {
    icon: <BuildIcon />,
    category: "Testing and Additional Tools",
    items: [
      { name: "Agile Methodologies" },
      { name: "Exploratory Testing" },
      { name: "Conventional Testing Methodologies" },
      { name: "Jest" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className={style.skills}>
      {skills.map((skill) => (
        <div className={style.skillContainer} key={skill.category}>
          <div className={style.skillTitle}>
            <div className={style.skillTitleSvg}>{skill.icon}</div>
            <div>
              <h3>{skill.category}</h3>
            </div>
          </div>

          <div className={style.skillCard}>
            {skill.items.map((item) => (
              <div key={item.name}>
                <div className={style.skill}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
