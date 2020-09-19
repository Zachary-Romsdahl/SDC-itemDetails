import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  padding-top: 2px;
`;

export const DropDownContainer = styled('div')``;

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
  &:hover {
    border-color: rgba(34, 34, 34, 0.5);
    box-shadow: 0 1px 12px 0 rgba(34, 34, 34, 0.2);
  }
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  width: 100%;
`;

export const DropDownList = styled('ul')`
  padding: 6px 0px 6px 10px;
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
  &:hover {
    background-color: #0099ff;
    color: white;
  }
`;

export const Title = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 10px;
  color: #222222;
`;
