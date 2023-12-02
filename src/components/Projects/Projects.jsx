import MainProjects from "../MainProjects/MainProjects";
import Browser from "../Browser/Browser";

import style from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={style.projectsContainer}>
      <div className={style.code}>
        <Browser />
        <MainProjects />
      </div>
    </section>
  );
};

export default Projects;
