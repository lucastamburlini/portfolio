import translations from "./translations";

import imgPokeApi from "./imgProjects/pokeapi.jpg";
import imgPokeApiLogo from "./imgLogos/pokeApi.png";

import imgRickMorty from "./imgProjects/rickandmorty.jpg";
import imgRickMortyLogo from "./imgLogos/rickAndMorty.png";

import imgEnigma from "./imgProjects/enigma.jpg";
import imgEnigmaLogo from "./imgLogos/enigma.png";

import imgRps from "./imgProjects/rps.jpg";
import imgRpsLogo from "./imgLogos/rps.png";

import imgPortfolio from "./imgProjects/portfolio.jpg";
import imgPortfolioLogo from "./imgLogos/portfolioOld.png";

import imgTaskManager from "./imgProjects/taskManager.jpg";
import imgTaskManagerLogo from "./imgLogos/taskManager.png";

import imgEducaStream from "./imgProjects/educaStream.jpg";
import imgEducaStreamLogo from "./imgLogos/educaStream.png";

export const getProjectsData = (currentLanguage) => {
  const currentTranslations = translations[currentLanguage];
  return [
    {
      id: 7,
      title: currentTranslations.project_educaStream,
      description: "",
      img: imgEducaStream,
      url: "https://educastream.vercel.app",
      tags: [
        "React",
        "CSS Module",
        "PostgreSQL",
        "Express",
        "Sequelize",
        "Node JS",
      ],
      logo: imgEducaStreamLogo,
      main: true,
    },
    {
      id: 6,
      title: currentTranslations.project_pokeApi,
      description: "",
      img: imgPokeApi,
      url: "https://pokeapp-three-beta.vercel.app",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgPokeApiLogo,
      main: true,
    },
    {
      id: 5,
      title: currentTranslations.project_rickAndMorty,
      description: "",
      img: imgRickMorty,
      url: "https://rickandmorty-gold.vercel.app",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgRickMortyLogo,
      main: true,
    },
    {
      id: 4,
      title: currentTranslations.project_enigma,
      description: currentTranslations.description_enigma,
      img: imgEnigma,
      url: "https://enigma-beryl.vercel.app",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgEnigmaLogo,
      main: true,
    },
    {
      id: 3,
      title: currentTranslations.project_rps,
      description: currentTranslations.description_rps,
      img: imgRps,
      url: "https://rps-game-delta.vercel.app",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgRpsLogo,
      main: false,
    },
    {
      id: 2,
      title: currentTranslations.project_portfolio,
      description: currentTranslations.description_portfolio,
      img: imgPortfolio,
      url: "https://lucastamburliniold.vercel.app",
      tags: ["React", "HTML", "SCSS"],
      logo: imgPortfolioLogo,
      main: false,
    },
    {
      id: 1,
      title: currentTranslations.project_taskManager,
      description: currentTranslations.description_taskManager,
      img: imgTaskManager,
      url: "https://task-manager-one-ochre.vercel.app",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgTaskManagerLogo,
      main: false,
    },
  ];
};
export default getProjectsData;
