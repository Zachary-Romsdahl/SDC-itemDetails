import React from 'react';
import { Wrapper, Price, Stock, Pricebox } from './Module.style.jsx';

const Module = (props) => {
  const { apiData } = props;
  return (
    <Wrapper>
      <Pricebox>
        <Price>
          $
          {apiData.map((obj) => {
            return obj.price.toFixed(2);
          })}
        </Price>
        <Stock>
          {apiData.map((obj) => {
            return obj.availability;
          })}
        </Stock>
      </Pricebox>
    </Wrapper>
  );
};

export default Module;
