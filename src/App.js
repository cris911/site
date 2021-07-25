import './App.css';
import React from 'react'
import SectionTitle from './components/SectionTitle/SectionTitle'
import MainNavBar from './components/MainNavBar/MainNavBar';
import Footer from './components/Footer/Footer';
import styled from 'styled-components'

const MainContainer = styled.main`
position: relative;
`

const Sections = styled.div`
display: flex;
flex-direction: column;
`

function App() {

  return (
    <MainContainer className="site">
      <MainNavBar/>
      <Sections>
        <SectionTitle text="CRISIS"/>
        <SectionTitle text="LABERINTO"/>
        <SectionTitle text="ANÁLOGA"/>
      </Sections>
      <Footer />
    </MainContainer>
  );
}

export default App;
