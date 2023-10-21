import SectionTitles from "../SectionTitles/SectionTitles";
import { skills } from "./skills";

import style from "./Stack.module.css";

const Stack = () => {
  return (
    <>
      <SectionTitles id={"stack"} text={"PRUEBA"} />
      <div className={style.stackContainer}>
        <section>
          <article>
            <p>stack</p>
          </article>
        </section>
        <section className={style.boxStackContainer}>
          {skills.map((item, index) => (
            <div key={index} className={style.boxStack}>
              <div className={style.boxStackImg}>{item.icon}</div>
              <div className={style.boxStackText}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Stack;
