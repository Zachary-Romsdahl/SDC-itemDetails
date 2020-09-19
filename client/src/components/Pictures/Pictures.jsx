import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  CartIcon,
  CartIcon2,
  Svg1,
  Svg2,
  Span,
  Text,
} from './Pictures.style.jsx';

const Pictures = (props) => {
  const isTrue = props.apiData.map((obj) => {
    return obj.isFreeShipping;
  });

  if (isTrue[0]) {
    return (
      <Wrapper>
        <Svg1>
          <CartIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </CartIcon>
          <Span>Other people want this.</Span>
          <Text>Over 20 people have this in their carts right now.</Text>
        </Svg1>
        <Svg2>
          <CartIcon2>
            <FontAwesomeIcon icon={faTruck} />
          </CartIcon2>
          <Span>Hooray!</Span>
          <Text> This item ships free to the US.</Text>
        </Svg2>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Svg1>
          <CartIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </CartIcon>
          <Span>Other people want this.</Span>
          <Text>Over 15 people have this in their carts right now.</Text>
        </Svg1>
      </Wrapper>
    );
  }
};

export default Pictures;
