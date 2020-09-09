import styled from 'styled-components';

export const Wrapper = styled('div')`
  padding-top: 2px;
  margin-bottom: 0.8em;
  background: none;
  height: 30vh;
`;

export const DropDownContainer = styled('div')`
  width: auto;
`;

export const DropDownHeader = styled('div')`
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 1px 6px 0 rgba(34, 34, 34, 0.15);
  display: block;
  font-family: inherit;
  font-size: 16px;
  color: #3faffa;
  height: 30px;
  padding-left: 12px;
  padding-right: 36px;
  color: #222222;
  text-indent: 0.01px;
  cursor: pointer;
  border-radius: 6px;
  background: #ffffff;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
`;

export const DropDownList = styled('ul')`
  padding: 6px 0px 6px 10px;
  width: 448px;
  margin-top: -0.2em;
  box-sizing: border-box;
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  background: #ffffff;
  border-color: rgba(34, 34, 34, 0.15);
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
`;

export const ListItem = styled('li')`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  color: #222222;
`;

export const Title = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 10px;
  color: #222222;
`;

export const Button1 = styled.button`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  background: none;
  border-radius: 24px;
  font-size: 16px;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  display: inline-block;
  text-align: center;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  margin-top: 1em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;
  background-size: 100% 60%;
  background-position: 50% 50%;
  width: 100% !important;
`;

export const Button2 = styled.button`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  border-radius: 24px;
  font-size: 16px;
  color: white;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  font-size: 16px;
  font-weight: bold;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  display: inline-block;
  text-align: center;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  margin-top: 1em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;
  background: #222222;
  background-size: 100% 60%;
  background-position: 50% 50%;
  width: 100% !important;
`;
