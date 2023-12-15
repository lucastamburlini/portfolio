import MainProjects from "../MainProjects/MainProjects";
import Browser from "../Browser/Browser";

import style from "./ProjectsLayout.module.css";

const ProjectsLayout = () => {
  return (
    <section className={style.projectsContainer}>
      <div className={style.code}>
        <Browser />
        <MainProjects />
      </div>
    </section>
  );
};

export default ProjectsLayout;
