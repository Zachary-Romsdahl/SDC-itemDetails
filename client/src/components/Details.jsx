import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 10px;
  color: #222222;
`;

const Text = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
  color: black;
`;

export default function Details(props) {
  // console.log('Props', props.product);
  const { product } = props;
  return (
    <Wrapper>
      <Title>Description</Title>
      <Text>{product.map((object) => object.itemDescription)}</Text>
    </Wrapper>
  );
}

Details.defaultProps = {
  product: [],
};
Details.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
