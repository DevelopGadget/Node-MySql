const Conexion = require('./Conexion');
var Conectado = true;

Conexion.Connection.connect(err => {
  Conectado = err ? false : true;
});

function Get (req, res) {
  res.status(200).send('Hola soy get');
}

function Put (req, res) {
  res.status(200).send('Hola soy put');
}

function Delete (req, res) {
  res.status(200).send('Hola soy delete');
}

function Post (req, res) {
  res.status(200).send('Hola soy post');
}

module.exports = {Get, Put, Delete, Post}