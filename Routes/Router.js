'use strict'

var User = require('../Database/Usuario');

module.exports = function (app){
  app.get('/User', User.Get);
  app.post('/User', User.Post);
  app.put('/User', User.Put);
  app.delete('/User', User.Delete);
}