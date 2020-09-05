import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Page from './components/Page.jsx';

const Wrapper = styled.div`
  padding: 0.4em 1em 0.4em 1em;
  width: 450px;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  line-height: 150%;
  letter-spacing: 0.4px;
`;

const productId = () => {
  var url = window.location.href;
  if (url[url.length - 1] === '/') {
    var productId = '1';
  } else {
    var index = url.lastIndexOf('/');
    var productId = url.slice(index + 1);
  }
  return productId;
};

ReactDOM.render(
  <Wrapper>
    <Page id={productId()} />
  </Wrapper>,
  document.getElementById('details')
);
