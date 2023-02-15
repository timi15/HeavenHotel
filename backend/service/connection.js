const mysql = require('mysql');
const config = require('./configs/config.json');

module.exports = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});