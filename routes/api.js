
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Lists = require('../models/list');

// Routes
Lists.methods(['get', 'put', 'post', 'delete']);
Lists.register(router, '/museums/list_officers');

// Return router
module.exports = router;
