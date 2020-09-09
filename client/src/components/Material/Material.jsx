import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreText from 'react-show-more-text';
import { Wrapper, Title, StyledText, Text } from './Material.style.jsx';

export default class Material extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    console.log('TEST', this.props.product);
    const text = this.props.product.map((object) => object.materials);
    return (
      <Wrapper>
        <Title>Materials</Title>
        <StyledText>
          <ShowMoreText
            lines={1}
            more="more"
            less={false}
            anchorClass=""
            onClick={this.executeOnClick}
            expanded={false}
            width={400}
          >
            <Text>{text}</Text>
          </ShowMoreText>
        </StyledText>
      </Wrapper>
    );
  }
}

Material.defaultProps = {
  product: [],
};
Material.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
};
