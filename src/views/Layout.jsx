import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Layout = () => {
  return (
    <div>
      <Home />
      <Contact />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Layout;
