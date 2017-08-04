var mysql = require('mysql')

let connMySql = function () {
  console.log('noticias')
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nicholas',
    database: 'portal_noticias'
  })
}

module.exports = function () {
  return connMySql
}
