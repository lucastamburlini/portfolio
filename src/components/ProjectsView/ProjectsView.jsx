import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import { useNavigate } from "react-router-dom";

import style from "./ProjectsView.module.css";

const ProjectsView = () => {
  const language = useSelector((state) => state.language);
  const { spanProjectsView, projects } = translations[language];
  const navigate = useNavigate();

  const handleToProject = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/projects");
  };

  return (
    <>
      <div className={style.lighting}></div>
      <div id="projects" className={style.projectsViewContainer}>
        <h2>
          {spanProjectsView}
          <button onClick={handleToProject}>
            <h2>{projects}</h2>
          </button>
        </h2>
      </div>
    </>
  );
};

export default ProjectsView;
