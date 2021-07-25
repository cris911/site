import React from 'react'
import {default as logo} from '../../logo.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'
import mediaQueries from '../../constants/mediaQueries'

const MainNavBar = () => {
    
    const NavBar = styled.nav`
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        margin-bottom: 40px;
        @media (max-width: ${mediaQueries.medium}) {
            flex-direction: column;
        };
    `
    const Item = styled.p`
        font-size: ${fontSizes.large};
        padding: 0 20px;
        margin: 0;
        @media (max-width: ${mediaQueries.medium}) {
            font-size: ${fontSizes.medLarge};
        };
    `

    const Links = styled.div`
        display: flex;
        algin-items: center;
    `
    const Eye = styled.img`
        padding: 40px;
        height: 80px;
        width: auto;
        @media (max-width: ${mediaQueries.medium}) {
            height: 60px;
        };
    `

    return (
        <NavBar>
            <Eye src={logo} />
            <Links>
                <Item>Acerca de</Item>
                <Item>Contacto</Item>
            </Links>
        </NavBar>
    );
};

MainNavBar.propTypes = {
  text: PropTypes.string
};

export default MainNavBar;
