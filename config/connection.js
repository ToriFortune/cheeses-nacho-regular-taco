//  mySQL connection info
const mysql = require ("mysql");

const connection = mysql.createConnection({
host:"localhost",
user:"root",
password:process.env.SQL_PASSWORD,
database:"tacosDB"});

// export
module.exports = connection;