import React from 'react';
import {
  Wrapper,
  Price,
  Stock,
  Pricebox,
  Check,
  Svg,
  Stockbox,
} from './Module.style.jsx';

const svgImg = {
  mark: (key) => (
    <Svg
      key={key}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z" />
    </Svg>
  ),
};

const checkMark = (apiData) => {
  const pic = [];
  const stock = apiData.map((obj) => {
    return obj.availability;
  });
  if (stock[0] === 'In stock') {
    console.log('true');
    pic.push(svgImg.mark(1));
  }
  return pic;
};

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
        <Stockbox>
          <Check>{checkMark(apiData)}</Check>
          <Stock>
            {apiData.map((obj) => {
              return obj.availability;
            })}
          </Stock>
        </Stockbox>
      </Pricebox>
    </Wrapper>
  );
};

export default Module;
