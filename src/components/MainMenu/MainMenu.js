import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styled from "styled-components";

const Sections = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainMenu = () => {
  return (
    <Sections>
      <SectionTitle text="CRISIS" link="/crisis" />
      <SectionTitle text="LABERINTO" link="/laberinto" />
      <SectionTitle text="ANÁLOGA" link="/analoga" />
    </Sections>
  );
};

export default MainMenu;
