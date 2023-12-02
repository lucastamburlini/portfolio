import style from "./SectionTitles.module.css";

const SectionTitles = ({ text, id }) => {
  return (
    <div id={id} className={style.sectionTitlesContainer}>
      <div className={style.lighting}></div>
      <span>{text}</span>
    </div>
  );
};

export default SectionTitles;
