import About from "../../components/About/About";
import Experiences from "../../components/Experiences/Experiences";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Stack from "../../components/Stack/Stack";
import Progress from "../../components/Progress/Progress";
import GitHub from "../../components/GitHub/GitHub";

import style from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={style.layoutContainer}>
        <Progress />
        <Hero />
        <GitHub />
        <Projects />
        <About />
        <Experiences />
        <Stack />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
