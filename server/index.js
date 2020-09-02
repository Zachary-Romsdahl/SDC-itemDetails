const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

// const descriptionController = require('./controller/descriptionController.js');
const Description = require('../database/serviceDescription.js');
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  next();
});

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

app.get('/info', (req, res) => {
  // This method returns the value of param id when present
  Promise.all([
    axios.get('https://ttreitshop.s3-us-west-2.amazonaws.com/item1.json'),
    axios.get('https://rvrita-fec-reviews.s3.us-west-1.amazonaws.com/rvrita-fec-reviews.json'),
    axios.get('https://valeriia-ten-inventory.s3.us-east-2.amazonaws.com/inventory1.json')
  ])
    .then(([shop, reviews, inventory]) => {
      const data = {
        seller_name: shop.data.seller_name,
        total_store_items: shop.data.total_store_items,
        total_store_sales: shop.data.total_store_sales,
        rating: reviews.data.rating,
        quantity: inventory.data.quantity,
        price: inventory.data.itemPrice,

      };
      res.send(data);
    });
});

<<<<<<< HEAD
app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
=======
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
>>>>>>> 4e5c6e8fc88569e1c56c42f14497ec2b2ca11311
});

module.exports = app;
