import "./App.css";
import React from "react";
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Footer from "./components/Footer/Footer";
import MainMenu from "./components/MainMenu/MainMenu";
import styled from "styled-components";
import BioBox from "./components/BioBox/BioBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainContainer = styled.main`
  position: relative;
`;

const App = () => {
  return (
    <Router>
      <MainContainer className="site">
        <MainNavBar />
        <Routes>
          <Route exact path="/" element={MainMenu()} />
          <Route exact path="/bio" element={BioBox()} />
        </Routes>
        <Footer />
      </MainContainer>
    </Router>
  );
};

export default App;
