import React from "react";
import { Route, Routes } from "react-router-dom";
import PageFive from "./components/pagefive";
import PageFour from "./components/pageFour";
import PageOne from "./components/pageOne";
import PageSeven from "./components/pageSeven";
import PageSix from "./components/pageSix";
import PageThree from "./components/pageThree";
import PageTwo from "./components/pageTwo";

const Home = () => {
  return (
    <>
      <Routes>
        <Route index element={<PageOne />} />
        <Route path={"/whatwedo"} element={<PageTwo />} />
        <Route path={"/products"} element={<PageThree />} />
        <Route path={"/offers"} element={<PageFour />} />
        <Route path={"/services"} element={<PageFive />} />
        <Route path={"/milestones"} element={<PageSix />} />
        <Route path={"/feedbacks"} element={<PageSeven />} />
      </Routes>
    </>
  );
};

export default Home;
