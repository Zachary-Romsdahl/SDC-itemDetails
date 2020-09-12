const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const cors = require('cors');

// const descriptionController = require('./controller/descriptionController.js');
const Description = require('../database/serviceDescription.js');
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/itemDetails/:productId', (req, res) => {
  // This method returns the value of param id when present
  const id = req.params.productId;
  Description.find({ productId: id }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log('DATA FROm DB', result);
      res.send(result);
    }
  });
});

app.get('/info/:productId', (req, res) => {
  // This method returns the value of param id when present
  const id = req.params.productId;
  Promise.all([
    axios.get('https://ttreit-shop-all.s3-us-west-2.amazonaws.com/all.json'),
    // axios.get('http://etsy-reviews.rvrita.com/'),
    axios.get('https://valeriia-ten-inventory.s3.us-east-2.amazonaws.com/100inventory.json'),
  ])
    .then(([shop, inventory]) => {
      const shopObjById = shop.data.filter((obj) => {
        return (obj.product_id === parseInt(id));
      });
      const inventoryById = inventory.data.filter((obj) => {
        return (obj.product_id === parseInt(id));
      });
      const data = {
        seller_name: shopObjById[0].seller_name,
        total_store_items: shopObjById[0].total_store_items,
        total_store_sales: shopObjById[0].total_store_sales,
        quantity: inventoryById[0].quantity,
        price: inventoryById[0].itemPrice,
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
