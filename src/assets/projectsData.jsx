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

import imgFlexwork from "./imgProjects/flexwork.png";
import imgFlexworkLogo from "./imgLogos/flexwork.png";

import imgFreelanceTips from "./imgProjects/freelance-tips.png";
import imgFreelanceTipsLogo from "./imgLogos/freelance-tips.png";

export const getProjectsData = (currentLanguage) => {
  const currentTranslations = translations[currentLanguage];
  return [
    {
      id: 8,
      title: currentTranslations.project_freelanceTips,
      description: currentTranslations.description_freelanceTips,
      img: imgFreelanceTips,
      url: "https://freelance-tips.vercel.app/",
      tags: ["React", "Tailwind CSS", "Playwright"],
      logo: imgFreelanceTipsLogo,
      main: true,
      code_frontend: "",
      code_backend: "",
      code_unique: "https://github.com/lucastamburlini/freelanceTips",
    },
    {
      id: 7,
      title: currentTranslations.project_flexwork,
      description: currentTranslations.description_flexwork,
      img: imgFlexwork,
      url: "https://www.flexworklatam.com/",
      tags: [
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Express",
        "Sequelize",
        "Node JS",
        "Firebase",
      ],
      logo: imgFlexworkLogo,
      main: true,
      code_frontend: "https://github.com/flexworkFullteam/client",
      code_backend: "https://github.com/flexworkFullteam/server",
      code_unique: "",
    },
    {
      id: 6,
      title: currentTranslations.project_educaStream,
      description: currentTranslations.description_educaStream,
      img: imgEducaStream,
      url: "https://educastream.vercel.app",
      tags: [
        "React",
        "CSS Module",
        "PostgreSQL",
        "Express",
        "Sequelize",
        "Node JS",
        "Firebase",
        "Stripe",
      ],
      logo: imgEducaStreamLogo,
      main: true,
      code_frontend: "https://github.com/lucastamburlini/educastream",
      code_backend: "https://github.com/lucastamburlini/educastream-api",
      code_unique: "",
    },
    {
      id: 5,
      title: currentTranslations.project_pokeApi,
      description: currentTranslations.description_pokeapi,
      img: imgPokeApi,
      url: "https://pokeapp-three-beta.vercel.app",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgPokeApiLogo,
      main: false,
      code_frontend: "https://github.com/lucastamburlini/pokeapp",
      code_backend: "https://github.com/lucastamburlini/pokeapi",
      code_unique: "",
    },
    {
      id: 4,
      title: currentTranslations.project_rickAndMorty,
      description: currentTranslations.description_rickAndMorty,
      img: imgRickMorty,
      url: "https://rickandmorty-gold.vercel.app",
      tags: ["React", "Redux", "CSS", "PostgreSQL", "Express", "Node JS"],
      logo: imgRickMortyLogo,
      main: true,
      code_frontend: "https://github.com/lucastamburlini/rickandmorty",
      code_backend: "https://github.com/lucastamburlini/rickandmorty-api",
      code_unique: "",
    },
    {
      id: 3,
      title: currentTranslations.project_enigma,
      description: currentTranslations.description_enigma,
      img: imgEnigma,
      url: "https://enigma-beryl.vercel.app",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgEnigmaLogo,
      main: false,
      code_frontend: "",
      code_backend: "",
      code_unique: "https://github.com/lucastamburlini/enigma",
    },
    {
      id: 2,
      title: currentTranslations.project_rps,
      description: currentTranslations.description_rps,
      img: imgRps,
      url: "https://rps-game-delta.vercel.app",
      tags: ["JavaScript", "HTML", "CSS"],
      logo: imgRpsLogo,
      main: false,
      code_frontend: "",
      code_backend: "",
      code_unique: "https://github.com/lucastamburlini/rps-game",
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
      code_frontend: "",
      code_backend: "",
      code_unique: "https://github.com/lucastamburlini/TaskManager",
    },
  ];
};
export default getProjectsData;
