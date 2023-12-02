import style from "./Browser.module.css";
import { useSelector } from "react-redux";
import getProjectsData from "../../assets/projectsData";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import translations from "../../assets/translations";
import StarIcon from "@mui/icons-material/Star";
import LockIcon from "@mui/icons-material/Lock";

const Browser = () => {
  const language = useSelector((state) => state.language);
  const { project_text_I, project_text_II } = translations[language];
  const listProjects = getProjectsData(language);

  return (
    <div className={style.githubContainer}>
      <div className={style.top}>
        <div className={style.web}>
          <div>
            {project_text_I} <CloseIcon />
          </div>
        </div>
        <div className={style.controller}>
          <div className={style.itemOne}></div>
          <div className={style.itemTwo}></div>
          <div className={style.itemThree}></div>
        </div>
      </div>
      <div className={style.search}>
        <span>
          <div>
            <LockIcon />
            {project_text_II}
          </div>
          <StarIcon />
        </span>
      </div>
      <div className={style.window}>
        {listProjects.map((project, index) => (
          <div key={index} className={style.link}>
            <li>
              <LinkIcon />{" "}
              <a target="_blank" href={project.url} rel="noreferrer">
                {project.url}
              </a>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browser;
