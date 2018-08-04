
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


// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Schs = require('../models/sch');

// Routes
Schs.methods(['get', 'put', 'post', 'delete']);
Schs.register(router, '/museums/schedules');

// Return router
module.exports = router;
