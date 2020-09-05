import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Details from './Details.jsx';
import Dropdown1 from './Dropdown1.jsx';
import Stars from './Stars.jsx';
import Material from './Material.jsx';
import NameOfItem from './NameOfItem.jsx';
import $ from 'jquery';

const Wrapper = styled.div`
  display: inline-block;
`;
const Title = styled.h1`
  font-family: 'Graphik Webfont', -apple-system, BlinkMacSystemFont, 'Roboto',
    'Droid Sans', 'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 28px;
  color: black;
`;

const SalesTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Droid Sans',
    'Segoe UI', 'Helvetica', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
`;
export default class Page extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      product: [],
      apiData: [],
    }),
      (this.getDataFromDB = this.getDataFromDB.bind(this));
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  componentDidMount() {
    this.getDataFromDB(this.props.id);
    this.getDataFromApi();
  }

  getDataFromDB(productId) {
    const { product } = this.state;
    $.ajax({
      url: `/itemDetails/${productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (productData) => {
        console.log('res data ----->', productData);
        this.setState({
          product: productData,
        });
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      },
    });
  }

  getDataFromApi() {
    const { apiData } = this.state;
    $.ajax({
      url: '/info',
      method: 'GET',
      contentType: 'application/json',
      success: (result) => {
        var arrayData = [];
        arrayData.push(result);
        this.setState({
          apiData: arrayData,
        });
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      },
    });
  }

  render() {
    const { product, apiData } = this.state;
    // console.log('HERE ----->', product);
    const sellerName = apiData.map((object) => {
      return object.seller_name;
    });
    const totalSales = apiData.map((object) => {
      return object.total_store_sales;
    });
    return (
      <Wrapper>
        <Title>{sellerName}</Title>
        <SalesTitle>{totalSales + ` sales`}</SalesTitle>
        <NameOfItem product={product} />
        <Dropdown1 apiData={apiData} product={product} />
        <Material product={product} />
        <Details product={product} />
      </Wrapper>
    );
  }
}
