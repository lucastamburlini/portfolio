import { useSelector } from "react-redux";
import getProjectsData from "../../assets/projectsData";
import Progress from "../../components/Progress/Progress";
import style from "./Projects.module.css";
import DetailProject from "../../components/DetailProject/DetailProject";

const Projects = () => {
  const language = useSelector((state) => state.language);

  const listProjects = getProjectsData(language);

  return (
    <div className={style.projectsContainer}>
      <Progress />
     
      <div className={style.listProjectsContainer}>
        {listProjects.map((project, index) => (
              <DetailProject key={index} project={project} />
            ))}
      </div>
    </div>
  );
};

export default Projects;
