const Conexion = require('./Conexion');

function Get(req, res) {
  Conexion.Connection.connect(err => {
    Conectado = err ? 
    Conexion.Connection.query('SELECT * FROM Usuarios', (err, result) =>{
      if(err){
        res.status(400).send(err);
      }else{
        res.status(200).send(result);
      } 
    })
    : res.status(400).send('No esta conectado');
  });
}

function Put(req, res) {
  res.status(200).send('Hola soy put');
}

function Delete(req, res) {
  res.status(200).send('Hola soy delete');
}

function Post(req, res) {
  res.status(200).send('Hola soy post');
}

module.exports = { Get, Put, Delete, Post }