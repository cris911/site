import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'
import mediaQueries from '../../constants/mediaQueries'

const SectionTitle = (props) => {

  const Container = styled.div`
    display: flex;
    word-break: break-word;
    cursor: pointer;
  `

  const Text = styled.section`
    font-size: ${fontSizes.homePage};
    font-weight: bold;
    background-color: white;
    color: black;
    width: 100%;
    padding: 20px;
    &:hover {
      background-color: black;
      color: white;
    };
    &:active {
      color: yellow;
    };
    @media (max-width: ${mediaQueries.medium}) {
      font-size: ${fontSizes.medHomePage};
    };
  `

  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  inverted: PropTypes.bool
};

export default SectionTitle;
