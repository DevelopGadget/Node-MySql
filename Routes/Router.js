'use strict'

var User = require('../Database/Usuario');

module.exports = function (app){
  app.get('/User', User.Get);
}