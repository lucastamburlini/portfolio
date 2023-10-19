import style from "./SectionTitles.module.css";

const SectionTitles = ({ text }) => {
  return (
    <div className={style.sectionTitlesContainer}>
      <span>{text}</span>
    </div>
  );
};

export default SectionTitles;
