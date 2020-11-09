const express = require('express');
// require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const itemDetails = require('./routes/itemDetails');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use('/itemDetails', itemDetails);

// FIX ME
app.get('/info/:productId', (req, res) => {
  const id = req.params.productId;
  const url = [
    'https://rvrita-fec-reviews.s3.us-west-1.amazonaws.com/rvrita-fec-reviews.json',
    'https://rvrita-fec-reviews.s3.us-west-1.amazonaws.com/rvrita-fec-reviews2.json',
  ];
  Promise.all([
    axios.get('https://ttreit-shop-all.s3-us-west-2.amazonaws.com/all.json'),
    axios.get(url[Math.floor(Math.random() * url.length)]),
    axios.get('https://valeriia-ten-inventory.s3.us-east-2.amazonaws.com/100inventory.json'),
  ])
    .then(([shop, reviews, inventory]) => {
      const shopObjById = shop.data.filter((obj) => (obj.product_id === parseInt(id)));
      const inventoryById = inventory.data.filter((obj) => (obj.product_id === parseInt(id)));
      const data = {
        seller_name: shopObjById[0].seller_name,
        total_store_items: shopObjById[0].total_store_items,
        total_store_sales: shopObjById[0].total_store_sales,
        quantity: inventoryById[0].quantity,
        price: inventoryById[0].itemPrice,
        itemPopularity: inventoryById[0].itemPopularity,
        availability: inventoryById[0].itemAvailability,
        isFreeShipping: inventoryById[0].isFreeShipping,
        rating: reviews.data.rating,
      };
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

module.exports = app;
