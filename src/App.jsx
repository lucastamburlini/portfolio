import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./views/Layout";

import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
