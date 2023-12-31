const path = require('path');

const productsController = require('../controllers/products');

const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', productsController.addProductController);

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
