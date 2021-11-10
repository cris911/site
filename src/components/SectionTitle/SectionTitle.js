import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import fontSizes from "../../constants/fontSize";
import mediaQueries from "../../constants/mediaQueries";
import { StyledLink } from "../StyledComponents";

const Container = styled.div`
  display: flex;
  word-break: break-word;
  cursor: pointer;
`;

const Text = styled.section`
  font-size: ${fontSizes.homePage};
  font-weight: bold;
  background-color: white;
  color: black;
  width: 100%;
  padding: 20px;
  letter-spacing: 10px;
  user-select: none;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    color: yellow;
  }
  @media (max-width: ${mediaQueries.medium}) {
    font-size: ${fontSizes.medHomePage};
  } ;
`;

const SectionTitle = (props) => {
  return (
    <Container>
      <StyledLink to={props.link}>
        <Text>{props.text}</Text>
      </StyledLink>
    </Container>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default SectionTitle;
