import MySql from 'mysql';

const Connection = MySql.createConnection({
  host: 'localhost',
  user: 'id6427175_root',
  password: '12345'
});

module.exports = {Connection}