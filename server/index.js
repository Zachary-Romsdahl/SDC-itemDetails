const express = require('express');
const bodyParser = require('body-parser');
// const descriptionController = require('./controller/descriptionController.js');
const { Description } = require('../database/serviceDescription.js');

const app = express();
/* eslint-disable no-path-concat */
/* eslint-disable prefer-template */
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/itemDetails/:productId', (req, res) => {
  // This method returns the value of param id when present
  const id = req.params.productId;
  Description.find({ productId: id }).exec((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
