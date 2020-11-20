const Descriptions = require('../../database_postgres/descriptions.js');
const Cache = require('../caching/index.js');

const itemDetails = {};

itemDetails.item_details_read = (req, res) => {
  const id = req.params.productId;
  Descriptions.findOne({ where: { product_id: id } })
    .then((response) => {
      Cache.set(id, JSON.stringify(response));
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Creates a new product and sets that product's id to largest productId + 1
itemDetails.item_details_create = (req, res) => {
  const product = req.body;
  Descriptions.create(product)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

// Updates the current product and returns an error if it doesn't exist
itemDetails.item_details_update = (req, res) => {
  const id = req.params.productId;
  const newData = req.body;
  Descriptions.update(newData, { where: { product_id: id } })
    .then((response) => {
      console.log('Successfully Updated:', response);
      Cache.update(id, newData);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log('Error:', err);
      res.status(400).send(err);
    });
};

// Deletes the product given the id;
itemDetails.item_details_delete = (req, res) => {
  const id = req.params.productId;
  console.log(`CRUD delete ${id}`);
  Descriptions.destroy({ where: { product_id: id } })
    .then((response) => {
      console.log(response);
      if (response === 1) {
        Cache.delete(id);
        res.status(200).send(`Successfully deleted product:${id}`);
      } else if (response === 0) {
        res.status(400).send('Couldn\'t find any products with this ID');
      } else {
        res.status(200).send(`Uh oh! Deleted ${response} product's!`);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

module.exports = { ItemDetailsController: itemDetails, Cache };
