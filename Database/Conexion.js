const MySql = require('mysql');

const Connection = MySql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9247414',
  password: 'MGE147UnMa',
  database: 'sql9247414'
});

module.exports = {Connection}