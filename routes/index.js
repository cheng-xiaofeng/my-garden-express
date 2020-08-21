var express = require('express');
var router = express.Router();

/* GET home page. */


module.exports = function (app) {
  
  app.use(require('./users'))
};
