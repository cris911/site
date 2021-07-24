import React from 'react'
import {default as logo} from '../../logo.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'

const MainNavBar = () => {
    
    const NavBar = styled.nav`
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        
    `
    const Item = styled.p`
        font-size: ${fontSizes.m};
    `

    const Links = styled.div`
        display: flex;
    `
    const Eye = styled.img`
        height: 20px;
        width: auto;
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
