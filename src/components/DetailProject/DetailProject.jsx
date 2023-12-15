import style from "./DetailProject.module.css";
import translations from "../../assets/translations";
import { useSelector } from "react-redux";

const DetailProject = (props) => {
  const { project } = props;
  const language = useSelector((state) => state.language);
  const { code } = translations[language];

  return (
    <div className={style.detailProjectContainer}>
      <div className={style.header}>
        <div className={style.imgContainer}>
          <img src={project.img} alt={project.title} />
        </div>
        <div className={style.titleContainer}>
          <div>
            <h2>{project.title}</h2>
            <a target="_blank" rel="noopener noreferrer" href={project.url}>
              {project.url}
            </a>
          </div>

          <div className={style.tagsContainer}>
            {project.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={style.info}>
        <div>
          <p>{project.description}</p>
        </div>
        <div className={style.code}>
          <ul>
            {project.code_frontend ? (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code_frontend}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  {code} FRONT END
                </a>
              </li>
            ) : (
              ""
            )}
            {project.code_backend ? (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code_backend}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  {code} BACK END
                </a>
              </li>
            ) : (
              ""
            )}
            {project.code_unique ? (
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code_unique}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                  {code}
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
