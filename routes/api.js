
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/list');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/museums/list_officers');

// Return router
module.exports = router;
