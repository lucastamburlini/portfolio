import { listProjects } from "../../data/data";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects container pd-1">
      <h2>Projects</h2>
      {listProjects.map((projects) => (
        <div className="card" key={projects.id}>
          <div>
            <div className="card-title">
              <h3>{projects.title} </h3>
            </div>
            <div className="card-img">
              <img src={projects.img} alt={projects.title} />
            </div>
          </div>
          <div>
            <p>{projects.description}</p>
          </div>
          <div>
            <div className="card-button">
              <div>
                <a href={projects.url} target="_blank" rel="noreferrer">
                  <LanguageIcon />
                </a>
              </div>
              <div>
                <a href={projects.gh} target="_blank" rel="noreferrer">
                  <CodeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
