import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <header>
        <Home />
        <Contact />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
