import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";

import "./skills.css";

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
      { name: "Sass" },
      { name: "Bootstrap" },
      { name: "Material UI" },
    ],
  },
  {
    icon: <StorageIcon />,
    category: "Back End",
    items: [
      { name: "Node.js" }, 
      { name: "Express" }, 
      { name: "MongoDB" }
    ],
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
    icon: <BugReportIcon />,
    category: "Testing",
    items: [
      { name: "Exploratory Testing" },
      { name: "Conventional Testing Methodologies" },
      { name: "Jest" },
    ],
  },
  {
    icon: <BuildIcon />,
    category: "Additional Tools",
    items: [
      { name: "Jira" },
      { name: "Postman" },
      { name: "Thunder Client" },
      { name: "Trello" },
      { name: "Agile Methodologies" },
      { name: "GitHub" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="skills container pd-1">
      {skills.map((skill) => (
        <div className="skill-container" key={skill.category}>
          <div className="skill-title">
            <div>
              <div>{skill.icon}</div>
            </div>
            <div>
              <h3>{skill.category}</h3>
            </div>
          </div>

          <div className="skill-card">
            {skill.items.map((item) => (
              <div key={item.name}>
                <div className="skill">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
