import { useSelector } from "react-redux";
import translations from "../../assets/translations";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TagIcon from "@mui/icons-material/Tag";

import "./projects.css";
import { useState } from "react";

const Projects = () => {
  const currentLanguage = useSelector((state) => state.language);
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All");

  const listProjects = [
    {
      id: 4,
      title: translations[currentLanguage].project_enigma,
      description: translations[currentLanguage].description_enigma,
      img: "/enigma.jpg",
      url: "https://enigma-beryl.vercel.app/",
      gh: "https://github.com/lucastamburlini/enigma",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 3,
      title: translations[currentLanguage].project_rps,
      description: translations[currentLanguage].description_rps,
      img: "/rps.jpg",
      url: "https://rps-game-delta.vercel.app/",
      gh: "https://github.com/lucastamburlini/rps-game",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 2,
      title: translations[currentLanguage].project_portfolio,
      description: translations[currentLanguage].description_portfolio,
      img: "/portfolio.jpg",
      url: "https://lucastamburliniold.vercel.app/",
      gh: "https://github.com/lucastamburlini/portfolio-viejo.git",
      tags: ["React", "HTML", "SCSS"],
    },
    {
      id: 1,
      title: translations[currentLanguage].project_taskManager,
      description: translations[currentLanguage].description_taskManager,
      img: "/taskManager.jpg",
      url: "https://task-manager-one-ochre.vercel.app/",
      gh: "https://github.com/lucastamburlini/TaskManager",
      tags: ["JavaScript", "HTML", "CSS"],
    },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div id="projects" className="projects container pd-1">
      <h2>{translations[currentLanguage].project_title}</h2>

      <div className="filterButton">
        <button
          className={activeTag === "all" ? "active" : ""}
          onClick={() => handleFilterChange("All")}
        >
          {translations[currentLanguage].button_all}
        </button>
        <button onClick={() => handleFilterChange("JavaScript")}>
          JavaScript
        </button>
        <button onClick={() => handleFilterChange("React")}>React</button>
        <button onClick={() => handleFilterChange("HTML")}>HTML</button>
        <button onClick={() => handleFilterChange("CSS")}>CSS</button>
      </div>

      {listProjects.map(
        (projects) =>
          (filter === "All" || projects.tags.includes(filter)) && (
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
                <div className="card-button-tag">
                  {projects.tags.map((tag) => (
                    <div className="card-tag" key={tag}>
                      <TagIcon />
                      {tag}
                    </div>
                  ))}
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
          )
      )}
    </div>
  );
};

export default Projects;
