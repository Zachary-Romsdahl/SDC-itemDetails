import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from './NameOfItem.style.jsx';

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
