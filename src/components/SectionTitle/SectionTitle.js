import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'
import mediaQueries from '../../constants/mediaQueries'

const SectionTitle = (props) => {

  const Container = styled.div`
    display: flex;
    word-break: break-word;
  `

  const Text = styled.section`
    font-size: ${fontSizes.homePage};
    padding: 20px;
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
  text: PropTypes.string
};

export default SectionTitle;
