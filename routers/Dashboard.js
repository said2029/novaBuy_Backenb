const express = require('express');
const  Dashboard  = require('../controllers/Dashboard');
const route = express.Router();

route.get('/', Dashboard);

module.exports = route;