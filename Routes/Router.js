'use strict'

var User = require('../Database/Usuario');

module.exports = function (app){
  app.get('/User', User.Get);
  app.post('/User', User.Post);
  app.put('/User/:Id', User.Put);
  app.delete('/User/:Id', User.Delete);
  app.get('/User/:Id', User.GetId);
}