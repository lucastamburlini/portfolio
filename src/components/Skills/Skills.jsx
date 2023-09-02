import "./skills.css";
import { tools } from "../../data/data";

const Skills = () => {
  return (
    <div 
   id="technologies" className="skills container pd-1">
      {tools.map((tool) => (
        <div key={tool.category}>
          <div>{tool.icon}</div>
          <div>
            <h3>{tool.category}</h3>
          </div>

          <div className="skill-styles">
            {tool.items.map((item) => (
              <div key={item.name}>
                <div className="skill">{item.name}</div>
              </div>
            ))}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Skills;
