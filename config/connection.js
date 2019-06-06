//  mySQL connection info
const mysql = require ("mysql");
const connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:process.env.SQL_PASSWORD,
        database:"tacosDB"
    });
};
// export

module.exports = connection;