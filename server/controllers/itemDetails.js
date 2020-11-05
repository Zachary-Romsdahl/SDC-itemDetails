const Descriptions = require('../../database_postgres/descriptions.js');

exports.item_details_read = (req, res) => {
  const id = req.params.productId;
  Descriptions.findOne({ where: { product_id: id } })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// Creates a new product and sets that product's id to largest productId + 1
exports.item_details_create = (req, res) => {
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
exports.item_details_update = (req, res) => {
  const id = req.params.productId;
  const newData = req.body;
  Descriptions.update(newData, { where: { product_id: id } })
    .then((response) => {
      console.log(response);
      res.status(200).send('Successfully updated product');
    })
    .catch((err) => {
      console.log('Error:', err);
      res.status(400).send(err);
    });
};

// Deletes the product given the id;
exports.item_details_delete = (req, res) => {
  const id = req.params.productId;
  Descriptions.destroy({ where: { product_id: id } })
    .then((response) => {
      console.log(response);
      if (response === 1) {
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
