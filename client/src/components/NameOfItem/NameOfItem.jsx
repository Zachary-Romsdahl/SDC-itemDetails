import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper, Popularity } from './NameOfItem.style.jsx';

class NameOfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Wrapper>
        <Title>
          {this.props.product.map((object) => {
            return object.itemName;
          })}
        </Title>
        <Popularity>
          {this.props.apiData.map((obj) => {
            return obj.itemPopularity;
          })}
        </Popularity>
      </Wrapper>
    );
  }
}

NameOfItem.defaultProps = {
  product: [],
};
NameOfItem.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
export default NameOfItem;
