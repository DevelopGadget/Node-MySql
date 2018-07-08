const MySql = require('mysql');

const Connection = MySql.createConnection({
  host: 'localhost',
  user: 'id6427175_root',
  password: '12345',
  database: 'id6427175_usuarios'
});

module.exports = {Connection}