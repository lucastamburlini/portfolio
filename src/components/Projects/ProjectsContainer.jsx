import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import { useState } from "react";
import CardProject from "../CardProjects/CardProjects";

import style from "./ProjectsContainer.module.css";

// import imgPokeApi from '../../imgProjects/assets/pokeapi.jpg'
// import imgRickMorty from '../../assets/imgProjects/rickandmorty.jpg'
import imgEnigma from "../../assets/imgProjects/enigma.jpg";
import imgEnigmaLogo from "../../assets/imgLogos/enigma.png";

import imgRps from "../../assets/imgProjects/rps.jpg";
import imgRpsLogo from "../../assets/imgLogos/rps.png";

import imgPortfolio from "../../assets/imgProjects/portfolio.jpg";
import imgPortfolioLogo from "../../assets/imgLogos/portfolioOld.png";

import imgTaskManager from "../../assets/imgProjects/taskManager.jpg";
import imgTaskManagerLogo from "../../assets/imgLogos/taskManager.png";

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
      logo: imgEnigmaLogo,
    },
    {
      id: 3,
      title: translations[currentLanguage].project_rps,
      description: translations[currentLanguage].description_rps,
      img: imgRps,
      url: "https://rps-game-delta.vercel.app/",
      gh: "https://github.com/lucastamburlini/rps-game",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgRpsLogo,
    },
    {
      id: 2,
      title: translations[currentLanguage].project_portfolio,
      description: translations[currentLanguage].description_portfolio,
      img: imgPortfolio,
      url: "https://lucastamburliniold.vercel.app/",
      gh: "https://github.com/lucastamburlini/portfolio-viejo.git",
      tags: ["React", "HTML", "SCSS"],
      logo: imgPortfolioLogo,
    },
    {
      id: 1,
      title: translations[currentLanguage].project_taskManager,
      description: translations[currentLanguage].description_taskManager,
      img: imgTaskManager,
      url: "https://task-manager-one-ochre.vercel.app/",
      gh: "https://github.com/lucastamburlini/TaskManager",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgTaskManagerLogo,
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
        (project) =>
          (filter === "All" || project.tags.includes(filter)) && (
            <CardProject
              key={project.id}
              project={project}
              currentLanguage={currentLanguage}
            />
          )
      )}
    </div>
  );
};

export default Projects;
