const express = require('express');
const { Dashboard } = require('../controllers/dashboard');
const route = express.Router();

route.get('/', Dashboard);

module.exports = route;