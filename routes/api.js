
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Listm = require('../models/listm');
var Collection = require('../models/collection');

// Routes
Collection.methods(['get', 'put', 'post', 'delete']);
Collection.register(router, '/museums/collection');

Listm.methods(['get', 'put', 'post', 'delete']);
Listm.register(router, '/museums/list');

// Return router
module.exports = router;


// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Hists = require('../models/hist');

// Routes
Hists.methods(['get', 'put', 'post', 'delete']);
Hists.register(router, '/museums/history');

// Return router
module.exports = router;
