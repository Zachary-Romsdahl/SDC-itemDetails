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
  font-family: 'Guardian-EgypTT', serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 25px;
  line-height: 32px;
  color: black;
`;

export default function Material(props) {
  return (
    <Wrapper>
      <Title>Materials</Title>
      <Text>{props.product.map((object) => object.materials)}</Text>
    </Wrapper>
  );
}

Material.defaultProps = {
  product: [],
};
Material.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
