/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper, Popularity } from './NameOfItem.style.jsx';

function NameOfItem(props) {
  const { apiData, product } = props;
  const itemPopularity = apiData.map((obj) => obj.itemPopularity);
  if (itemPopularity[0] === 'Bestseller') {
    return (
      <Wrapper>
        <Title>
          {product.itemName}
        </Title>
        <Popularity>{itemPopularity}</Popularity>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>
        {product.itemName}
      </Title>
    </Wrapper>
  );
}

NameOfItem.defaultProps = {
  product: {},
};
NameOfItem.propTypes = {
  product: PropTypes.object,
};
export default NameOfItem;
