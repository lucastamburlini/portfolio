import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "./projects.css";

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
              <p>{projects.description}</p>
            </div>
            <div className="card-img">
              <img src={projects.img} alt={projects.title} />
            </div>
          </div>

          <div className="card-button">
            <div>
              Tag
              <LocalOfferIcon />
            </div>
            <div className="card-button-code">
              <a href={projects.url} target="_blank" rel="noreferrer">
                Deploy <PlayCircleOutlineIcon />
              </a>
              <a href={projects.gh} target="_blank" rel="noreferrer">
                Code <PlayCircleOutlineIcon />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
