import React from "react";
import styled from "styled-components";
import fontSizes from "../../constants/fontSize";
import mediaQueries from "../../constants/mediaQueries";
import SvgEye from "../SVG/SvgEye";
import { StyledLink } from "../StyledComponents";

const NavBar = styled.nav`
  display: flex;
  user-select: none;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 0;
  @media (max-width: ${mediaQueries.medium}) {
    flex-direction: column;
    margin-bottom: 40px;
  } ;
`;
const Item = styled.p`
  font-size: ${fontSizes.large};
  font-weight: bold;
  padding: 0 20px;
  margin: 0;
  cursor: pointer;
  @media (max-width: ${mediaQueries.medium}) {
    font-size: ${fontSizes.medLarge};
  }
  &:active {
    color: blue;
  }
`;

const Links = styled.div`
  display: flex;
  algin-items: center;
`;

const MainNavBar = () => {
  const logoSize = "80px";

  const logoColor = "blue";

  return (
    <NavBar>
      <StyledLink to="/">
        <SvgEye height={logoSize} width={logoSize} fill={logoColor} />
      </StyledLink>
      <Links>
        <StyledLink to="/bio">
          <Item>BIO</Item>
        </StyledLink>
        <StyledLink to="/contact">
          <Item>CONTACTO</Item>
        </StyledLink>
      </Links>
    </NavBar>
  );
};

export default MainNavBar;
