/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Text1,
  Text,
  ButtonDiv,
  Button,
} from './Details.style.jsx';

export default function Details(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const { product } = props;
  if (!isOpen) {
    return (
      <Wrapper>
        <Title>Description</Title>

        <Text1>{product.itemDescription}</Text1>

        <ButtonDiv>
          <Button onClick={toggling}>Learn more about this item</Button>
        </ButtonDiv>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>Description</Title>
      <Text>{product.itemDescription}</Text>
      <ButtonDiv>
        <Button onClick={toggling}>Less</Button>
      </ButtonDiv>
    </Wrapper>
  );
}

Details.defaultProps = {
  product: {},
};
Details.propTypes = {
  product: PropTypes.object,
};
