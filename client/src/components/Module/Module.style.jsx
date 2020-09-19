import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Pricebox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Stockbox = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;
export const Price = styled.div`
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.4px;
  font-size: 28px;
  line-height: 36px;
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif; ;
`;
export const Stock = styled.div`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  display: inline-block;
  font-weight: 500;
  font-size: 13px;
  margin-left: 6px;
  text-align: right !important;
`;

export const Check = styled.div`
  display: inline-block;
`;

export const Svg = styled.svg`
  display: inline-block;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  box-sizing: border-box;
`;
