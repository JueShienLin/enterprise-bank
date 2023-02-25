import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box display={"flex"} flexDir={"row"} justifyContent={"flex-start"}>
          <Sidebar />
          <Box>
            <Routes>
              <Route index element={<Home />} />
              <Route path={"/*"} element={<Home />} />
              <Route path={"/About/*"} element={<About />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
