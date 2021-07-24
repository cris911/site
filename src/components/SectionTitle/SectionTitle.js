import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fontSizes from '../../constants/fontSize'

const SectionTitle = (props) => {

  const Container = styled.div`
    display: flex;
  `

  const Text = styled.section`
    font-size: ${fontSizes.homePage};
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
