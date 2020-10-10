import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper, Popularity } from './NameOfItem.style.jsx';

class NameOfItem extends React.Component {
  render() {
    const { apiData } = this.props;
    const itemPopularity = this.props.apiData.map((obj) => {
      return obj.itemPopularity;
    });
    if (itemPopularity[0] === 'Bestseller') {
      return (
        <Wrapper>
          <Title>
            {this.props.product.map((object) => {
              return object.itemName;
            })}
          </Title>
          <Popularity>{itemPopularity}</Popularity>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Title>
            {this.props.product.map((object) => {
              return object.itemName;
            })}
          </Title>
        </Wrapper>
      );
    }
  }
}

NameOfItem.defaultProps = {
  product: [],
};
NameOfItem.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
export default NameOfItem;
