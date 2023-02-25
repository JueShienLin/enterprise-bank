import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import PageFour from "./components/pageFour";
import PageOne from "./components/pageOne";
import PageThree from "./components/pageThree";
import PageTwo from "./components/pageTwo";

const About = () => {
  return (
    <Routes>
      <Route index element={<PageOne />} />
      <Route path={"/directors"} element={<PageTwo />} />
      <Route path={"/executives"} element={<PageThree />} />
      <Route path={"/reports"} element={<PageFour />} />
    </Routes>
  );
};

export default About;
