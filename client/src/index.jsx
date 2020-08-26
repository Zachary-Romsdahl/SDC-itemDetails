import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Page from './components/Page.jsx';

const Wrapper = styled.div`
  width: 450px;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  line-height: 150%;
  letter-spacing: 0.4px;
`;

ReactDOM.render(
  <Wrapper>
    <Page />
  </Wrapper>,
  document.getElementById('app')
);
