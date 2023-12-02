import { useSelector } from "react-redux";
import translations from "../../assets/translations";
import GitHubIcon from "@mui/icons-material/GitHub";

import style from "./GitHub.module.css";

const GitHub = () => {
  const language = useSelector((state) => state.language);
  const { spanGithub } = translations[language];

  return (
    <>
      <div className={style.lighting}>{spanGithub}</div>
      <div className={style.linkGithub}>
        <h2>
          {spanGithub}
          <a
            href="https://github.com/lucastamburlini"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
        <div className={style.linkGithubSvg}>
          <GitHubIcon />
        </div>
      </div>
    </>
  );
};

export default GitHub;
