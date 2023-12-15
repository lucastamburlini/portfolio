import About from "../../components/About/About";
import Experiences from "../../components/Experiences/Experiences";
import Hero from "../../components/Hero/Hero";
import ProjectsLayout from "../../components/ProjectsLayout/ProjectsLayout";
import Stack from "../../components/Stack/Stack";
import Progress from "../../components/Progress/Progress";
import ProjectsView from "../../components/ProjectsView/ProjectsView";

import style from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={style.layoutContainer}>
        <Progress />
        <Hero />
        <ProjectsView />
        <ProjectsLayout />
        <About />
        <Experiences />
        <Stack />
      </div>
    </>
  );
};

export default Layout;
