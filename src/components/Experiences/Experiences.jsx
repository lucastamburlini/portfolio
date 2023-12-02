import { useSelector } from "react-redux";
import style from "./Experiences.module.css";
import SectionTitles from "../SectionTitles/SectionTitles";
import translations from "../../assets/translations";

const Experiences = () => {
  const language = useSelector((state) => state.language);
  const {
    spanExperiences,
    experiences_III_title,
    experiences_III_date,
    experiences_III_company,
    experiences_III_text_I,
    experiences_III_text_II,
    experiences_II_title,
    experiences_II_date,
    experiences_II_company,
    experiences_II_text_I,
    experiences_II_text_II,
    experiences_II_text_III,
    experiences_I_title,
    experiences_I_date,
    experiences_I_company,
    experiences_I_text,
  } = translations[language];

  return (
    <section id="experiences" className={style.experiencesContainer}>
      <SectionTitles text={spanExperiences} />
      <ul className={style.timeline}>
        <li>
          <div className={style.timelineMiddle}>
            <div className={style.svgBackground}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z"
                />
              </svg>
            </div>
          </div>
          <div className={`${style.timelineStart}`}>
            <div className={`${style.time}`}>{experiences_III_date}</div>
            <div>
              <h3>{experiences_III_title}</h3>
            </div>
            <div>
              <h4>{experiences_III_company}</h4>
            </div>
            <div>
              <p>{experiences_III_text_I}</p>
              <br />
              <p>{experiences_III_text_II}</p>
              <br />
            </div>
          </div>
        </li>

        <li>
          <div className={style.timelineMiddle}>
            <div className={style.svgBackground}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z"
                />
              </svg>
            </div>
          </div>
          <div className={`${style.timelineEnd}`}>
            <div className={`${style.time}`}>{experiences_II_date}</div>
            <div>
              <h3>{experiences_II_title}</h3>
            </div>
            <div>
              <h4>{experiences_II_company}</h4>
            </div>
            <div>
              <p>{experiences_II_text_I}</p>
              <br />
              <p>{experiences_II_text_II}</p>
              <br />
              <p>{experiences_II_text_III}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={style.timelineMiddle}>
            <div className={style.svgBackground}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="currentColor"
                  d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z"
                />
              </svg>
            </div>
          </div>
          <div className={`${style.timelineStart}`}>
            <div className={`${style.time}`}>{experiences_I_date}</div>
            <div>
              <h3>{experiences_I_title}</h3>
            </div>
            <div>
              <h4>{experiences_I_company}</h4>
            </div>
            <div>
              <p>{experiences_I_text}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experiences;
