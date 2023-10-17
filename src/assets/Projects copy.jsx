import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import { useState } from "react";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TagIcon from "@mui/icons-material/Tag";

import style from "./Projects.module.css";

// import imgPokeApi from '../../assets/pokeapi.jpg'
// import imgRickMorty from '../../assets/rickandmorty.jpg'
import imgEnigma from '../../assets/enigma.jpg'
import imgRps from '../../assets/rps.jpg'
import imgPortfolio from '../../assets/portfolio.jpg'
import imgTaskManager from '../../assets/taskManager.jpg'


const Projects = () => {
  const currentLanguage = useSelector((state) => state.language);
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All");

  const listProjects = [
    {
      id: 4,
      title: translations[currentLanguage].project_enigma,
      description: translations[currentLanguage].description_enigma,
      img: imgEnigma,
      url: "https://enigma-beryl.vercel.app/",
      gh: "https://github.com/lucastamburlini/enigma",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 3,
      title: translations[currentLanguage].project_rps,
      description: translations[currentLanguage].description_rps,
      img: imgRps,
      url: "https://rps-game-delta.vercel.app/",
      gh: "https://github.com/lucastamburlini/rps-game",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 2,
      title: translations[currentLanguage].project_portfolio,
      description: translations[currentLanguage].description_portfolio,
      img: imgPortfolio,
      url: "https://lucastamburliniold.vercel.app/",
      gh: "https://github.com/lucastamburlini/portfolio-viejo.git",
      tags: ["React", "HTML", "SCSS"],
    },
    {
      id: 1,
      title: translations[currentLanguage].project_taskManager,
      description: translations[currentLanguage].description_taskManager,
      img: imgTaskManager,
      url: "https://task-manager-one-ochre.vercel.app/",
      gh: "https://github.com/lucastamburlini/TaskManager",
      tags: ["JavaScript", "HTML", "CSS"],
    },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveTag(newFilter);
  };

  return (
    <div id="projects" className={style.projectsContainer}>
      <div>
        <h2>{translations[currentLanguage].project_title}</h2>
        <div>
          <p>{translations[currentLanguage].project_description}</p>
        </div>

        <div className={style.filterButton}>
          <button
            className={activeTag === "All" ? style.active : ""}
            onClick={() => handleFilterChange("All")}
          >
            {translations[currentLanguage].button_all}
          </button>
          <button
            className={activeTag === "JavaScript" ? style.active : ""}
            onClick={() => handleFilterChange("JavaScript")}
          >
            JavaScript
          </button>
          <button
            className={activeTag === "React" ? style.active : ""}
            onClick={() => handleFilterChange("React")}
          >
            React
          </button>
          <button
            className={activeTag === "HTML" ? style.active : ""}
            onClick={() => handleFilterChange("HTML")}
          >
            HTML
          </button>
          <button
            className={activeTag === "CSS" ? style.active : ""}
            onClick={() => handleFilterChange("CSS")}
          >
            CSS
          </button>
          <button
            className={activeTag === "SCSS" ? style.active : ""}
            onClick={() => handleFilterChange("SCSS")}
          >
            SCSS
          </button>
        </div>
      </div>

      {listProjects.map(
        (projects) =>
          (filter === "All" || projects.tags.includes(filter)) && (
            <div className={style.card} key={projects.id}>
              <div>
                <div className={style.cardTitle}>
                  <h3>{projects.title} </h3>
                  <p>{projects.description}</p>
                </div>
                <div className={style.cardImg}>
                  <img src={projects.img} alt={projects.title} />
                </div>
              </div>

              <div className={style.cardButton}>
                <div className={style.cardButtonTag}>
                  {projects.tags.map((tag) => (
                    <div className={style.cardTag} key={tag}>
                      <TagIcon />
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={style.cardButtonCode}>
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
