import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./views/Layout/Layout";

import "./App.module.css";
import Projects from "./views/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
