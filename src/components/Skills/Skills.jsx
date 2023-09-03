import "./skills.css";
import { tools } from "../../assets/data";

const Skills = () => {
  return (
    <div id="technologies" className="container pd-1">
      {tools.map((tool) => (
        <div className="skill-container" key={tool.category}>
          <div className="skill-container-svg">
            <div>
              <div>{tool.icon}</div>
            </div>
            <div>
              <h3>{tool.category}</h3>
            </div>
          </div>

          <div className="skill-card">
            {tool.items.map((item) => (
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
