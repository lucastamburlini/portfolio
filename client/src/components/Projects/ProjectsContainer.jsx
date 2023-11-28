import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import { useState } from "react";
import CardProject from "../CardProjects/CardProjects";

import style from "./ProjectsContainer.module.css";

import imgPokeApi from "../../assets/imgProjects/pokeapi.jpg";
import imgPokeApiLogo from "../../assets/imgLogos/pokeApi.png";

import imgRickMorty from "../../assets/imgProjects/rickandmorty.jpg";
import imgRickMortyLogo from "../../assets/imgLogos/rickAndMorty.png";

import imgEnigma from "../../assets/imgProjects/enigma.jpg";
import imgEnigmaLogo from "../../assets/imgLogos/enigma.png";

import imgRps from "../../assets/imgProjects/rps.jpg";
import imgRpsLogo from "../../assets/imgLogos/rps.png";

import imgPortfolio from "../../assets/imgProjects/portfolio.jpg";
import imgPortfolioLogo from "../../assets/imgLogos/portfolioOld.png";

import imgTaskManager from "../../assets/imgProjects/taskManager.jpg";
import imgTaskManagerLogo from "../../assets/imgLogos/taskManager.png";

import imgEducaStream from "../../assets/imgProjects/educaStream.jpg";
import imgEducaStreamLogo from "../../assets/imgLogos/educaStream.png";

import SectionTitles from "../SectionTitles/SectionTitles";

const Projects = () => {
  const currentLanguage = useSelector((state) => state.language);
  const [filter, setFilter] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const currentTranslations = translations[currentLanguage];

  const listProjects = [
    {
      id: 7,
      title: currentTranslations.project_educaStream,
      description: "",
      img: imgEducaStream,
      url: "https://educastream.vercel.app/",
      tags: [
        "React",
        "CSS Module",
        "PostgreSQL",
        "Express",
        "Sequelize",
        "Node JS",
      ],
      logo: imgEducaStreamLogo,
    },
    {
      id: 6,
      title: currentTranslations.project_pokeApi,
      description: "",
      img: imgPokeApi,
      url: "https://pokeapp-three-beta.vercel.app/",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgPokeApiLogo,
    },
    {
      id: 5,
      title: currentTranslations.project_rickAndMorty,
      description: "",
      img: imgRickMorty,
      url: "https://rickandmorty-gold.vercel.app/",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgRickMortyLogo,
    },
    {
      id: 4,
      title: currentTranslations.project_enigma,
      description: currentTranslations.description_enigma,
      img: imgEnigma,
      url: "https://enigma-beryl.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgEnigmaLogo,
    },
    {
      id: 3,
      title: currentTranslations.project_rps,
      description: currentTranslations.description_rps,
      img: imgRps,
      url: "https://rps-game-delta.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgRpsLogo,
    },
    {
      id: 2,
      title: currentTranslations.project_portfolio,
      description: currentTranslations.description_portfolio,
      img: imgPortfolio,
      url: "https://lucastamburliniold.vercel.app/",
      tags: ["React", "HTML", "SCSS"],
      logo: imgPortfolioLogo,
    },
    {
      id: 1,
      title: currentTranslations.project_taskManager,
      description: currentTranslations.description_taskManager,
      img: imgTaskManager,
      url: "https://task-manager-one-ochre.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgTaskManagerLogo,
    },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveTag(newFilter);
  };

  return (
    <>
      <SectionTitles id={"projects"} text={currentTranslations.spanProjects} />
      <div className={style.projectsContainer}>
        <section className={style.projects}>
          <div>
            <h2>{currentTranslations.project_title}</h2>
          </div>
          <div className={style.filterButton}>
            <button
              className={activeTag === "All" ? style.active : ""}
              onClick={() => handleFilterChange("All")}
            >
              {currentTranslations.button_all}
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
            <button
              className={activeTag === "Redux" ? style.active : ""}
              onClick={() => handleFilterChange("Redux")}
            >
              Redux
            </button>
            <button
              className={activeTag === "PostgreSQL" ? style.active : ""}
              onClick={() => handleFilterChange("PostgreSQL")}
            >
              PostgreSQL
            </button>
            <button
              className={activeTag === "Node JS" ? style.active : ""}
              onClick={() => handleFilterChange("Node JS")}
            >
              Node JS
            </button>
            <button
              className={activeTag === "Express" ? style.active : ""}
              onClick={() => handleFilterChange("Express")}
            >
              Express
            </button>
          </div>
          <div className={style.listProjects}>
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
        </section>
      </div>
    </>
  );
};

export default Projects;
