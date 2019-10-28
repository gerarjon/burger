require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;