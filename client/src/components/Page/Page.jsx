import React from 'react';
import $ from 'jquery';
import Details from '../Details/Details.jsx';
import Dropdown1 from '../Dropdown1/Dropdown1.jsx';
import Material from '../Material/Material.jsx';
import NameOfItem from '../NameOfItem/NameOfItem.jsx';
import Stars from '../Stars/Stars.jsx';
import Module from '../Module/Module.jsx';
import Pictures from '../Pictures/Pictures.jsx';
import {
  Box, Box2, Wrapper, Title, SalesTitle, Span,
} from './Page.style.jsx';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      apiData: [],
      rating: 0,
    };
    this.getDataFromDB = this.getDataFromDB.bind(this);
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getDataFromDB(id);
    this.getDataFromApi(id);
  }

  getDataFromDB(productId) {
    $.ajax({
      url: `/itemDetails/${productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (productData) => {
        this.setState({
          product: productData,
        });
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      },
    });
  }

  getDataFromApi(productId) {
    $.ajax({
      url: `/info/${productId}`,
      method: 'GET',
      contentType: 'application/json',
      success: (result) => {
        const arrayData = [];
        arrayData.push(result);
        this.setState({
          apiData: arrayData,
          rating: result.rating,
        });
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      },
    });
  }

  render() {
    const { product, apiData, rating } = this.state;
    return (
      <Wrapper>
        <Title>{apiData.map((object) => object.seller_name)}</Title>
        <Box>
          <SalesTitle>
            {apiData.map((object) => object.total_store_sales)}
            {' '}
            sales
            {' '}
          </SalesTitle>
          <Span> | </Span>
          <Stars rating={rating} />
        </Box>
        <Box2>
          <NameOfItem product={product} apiData={apiData} />
          <Module apiData={apiData} />
          <Dropdown1 apiData={apiData} product={product} />
          <Pictures apiData={apiData} />
        </Box2>
        <Material product={product} />
        <Details product={product} />
      </Wrapper>
    );
  }
}
