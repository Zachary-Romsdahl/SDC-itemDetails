import React from 'react';
import styled from 'styled-components';
import Details from '../Details/Details.jsx';
import Dropdown1 from '../Dropdown1/Dropdown1.jsx';
import Material from '../Material/Material.jsx';
import NameOfItem from '../NameOfItem/NameOfItem.jsx';
import { Wrapper, Title, SalesTitle } from './Material.style.jsx';
import $ from 'jquery';

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
        console.log('Product data', productData);
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
        console.log('TEEEEST ------>', result);
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
    console.log('Data ----->', product);
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
