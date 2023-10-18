import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import style from "./CardProjects.module.css";

const CardProject = ({ project }) => {
  return (
    <div className={style.card} key={project.id}>
      <div className={style.cardDeploy}>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <PlayCircleOutlineIcon />
        </a>
      </div>
      <div className={style.cardTop}>
        <img src={project.img} alt={project.title} />
      </div>

      <div className={style.cardButton}>
        <img src={project.logo} alt={project.logo} />
        <h3>{project.title} </h3>
      </div>
    </div>
  );
};

export default CardProject;
