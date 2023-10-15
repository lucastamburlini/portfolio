import About from "../components/About/About";
import Experiences from "../components/Experiences/Experiences";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

import styleApp from "../App.module.css";

const Layout = () => {
  return (
    <div className={styleApp.container}>
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};

export default Layout;
