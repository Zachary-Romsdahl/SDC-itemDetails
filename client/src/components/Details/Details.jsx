import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ShowMoreText from 'react-show-more-text';
import { Wrapper, Title, Text } from './Details.style.jsx';

export default class Details extends React.Component {
  render() {
    // const text = this.props.product.map((object) => object.itemDescription);
    return (
      <Wrapper>
        <Title>Description</Title>
        <Text>
          {this.props.product.map((object) => object.itemDescription)}
        </Text>
      </Wrapper>
    );
  }
}

Details.defaultProps = {
  product: [],
};
Details.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
