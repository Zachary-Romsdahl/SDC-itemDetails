import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-family: 'Guardian-EgypTT', serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 26px;
  line-height: 32px;
  color: black;
`;
class NameOfItem extends React.Component {
  render() {
    const itemName = this.props.product.map((object) => {
      return object.itemName;
    });
    return <Title>{itemName}</Title>;
  }
}

NameOfItem.defaultProps = {
  product: [],
};
NameOfItem.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
export default NameOfItem;
