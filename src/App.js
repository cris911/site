import './App.css';
import React from 'react'
import SectionTitle from './components/SectionTitle/SectionTitle'
import MainNavBar from './components/MainNavBar/MainNavBar';
import styled from 'styled-components'

function App() {
  const MainContainer = styled.div`
  `

  const Sections = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <MainContainer className="site">
      <MainNavBar/>
      <Sections>
        <SectionTitle text="CRISIS"/>
        <SectionTitle text="LABERINTO"/>
        <SectionTitle text="ANÁLOGA"/>
      </Sections>
    </MainContainer>
  );
}

export default App;
