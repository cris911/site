import React from 'react'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'
import mediaQueries from '../../constants/mediaQueries'
import SvgEye from '../SVG/SvgEye'

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
padding: 0 20px;
align-items: center;
margin-bottom: 0;
@media (max-width: ${mediaQueries.medium}) {
    flex-direction: column;
    margin-bottom: 40px;
};
`
const Item = styled.p`
font-size: ${fontSizes.large};
font-weight: bold;
padding: 0 20px;
margin: 0;
cursor: pointer;
@media (max-width: ${mediaQueries.medium}) {
    font-size: ${fontSizes.medLarge};
};
`

const Links = styled.div`
display: flex;
algin-items: center;
`


const MainNavBar = () => {
    
    const logoSize = "80px"

    let logoColor = "blue"

    return (

        <NavBar>
            <SvgEye height={logoSize} width={logoSize} fill={logoColor}/>
            <Links>
                <Item>BIO</Item>
                <Item>CONTACTO</Item>
            </Links>
        </NavBar>
    );
};

export default MainNavBar;
