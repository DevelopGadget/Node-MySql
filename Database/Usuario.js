const Conexion = require('./Conexion');
var Conectado = true;

Conexion.Connection.connect(err => {
  Conectado = err ? false : true;
});

function Get () {

}

module.exports = {Get}