const express = require('express');
const { ItemDetailsController, Cache } = require('../controllers/itemDetails');

const router = express.Router();

router.get('/:productId', Cache.get, ItemDetailsController.item_details_read);

router.post('/', ItemDetailsController.item_details_create);

router.put('/:productId', ItemDetailsController.item_details_update);

router.delete('/:productId', ItemDetailsController.item_details_delete);

module.exports = router;
