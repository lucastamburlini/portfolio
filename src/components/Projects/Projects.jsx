import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";

import "./projects.css";
import { useSelector } from "react-redux";
import translations from "../../assets/translations";

const Projects = () => {
  const currentLanguage = useSelector((state) => state.language);

  const listProjects = [
    {
      id: 1,
      title: translations[currentLanguage].project,
      description: translations[currentLanguage].description,
      img: "/portfolio.jpg",
      url: "https://lucastamburliniold.vercel.app/",
      gh: "https://github.com/lucastamburlini/portfolio-viejo.git",
    },
  ];

  return (
    <div id="projects" className="projects container pd-1">
      <h2>{translations[currentLanguage].project_title}</h2>
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
