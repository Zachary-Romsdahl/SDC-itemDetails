import React from 'react';
import { Wrapper, Popularity, Price, Stock } from './Module.style.jsx';

const Module = (props) => {
  const { apiData } = props;
  console.log('Module ', apiData);
  return (
    <Wrapper>
      <div>
        <Popularity>
          {apiData.map((obj) => {
            return obj.itemPopularity;
          })}
        </Popularity>
      </div>
      <div>
        <Price>
          {apiData.map((obj) => {
            return obj.price;
          })}
        </Price>
        <Stock>
          {apiData.map((obj) => {
            return obj.availability;
          })}
        </Stock>
      </div>
    </Wrapper>
  );
};

export default Module;
