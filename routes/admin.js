const path = require('path');

const express = require('express');

const productsController = require('../controllers/product')

const router = express.Router();


router.get('/add-product', productsController.getAddProducts );

router.post('/add-product', productsController.postAddProducts);

exports.routes = router;
