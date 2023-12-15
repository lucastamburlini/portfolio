import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import CardProject from "../CardProjects/CardProject";
import getProjectsData from "../../assets/projectsData";

import style from "./MainProjects.module.css";

const MainProjects = () => {
  const currentLanguage = useSelector((state) => state.language);
  const currentTranslations = translations[currentLanguage];

  const listProjects = getProjectsData(currentLanguage);

  return (
    <>
      <div className={style.projectsContainer}>
        <section className={style.projects}>
          <div>
            <h2>{currentTranslations.project_title}</h2>
          </div>
          <div className={style.listProjects}>
            {listProjects.map((project) => {
              if (project.main === true) {
                return (
                  <CardProject
                    key={project.id}
                    project={project}
                    currentLanguage={currentLanguage}
                  />
                );
              }
              return null;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default MainProjects;
