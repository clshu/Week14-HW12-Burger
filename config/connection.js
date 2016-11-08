/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var localConnection = "mysql://root:puppetmaster@localhost:3306/burgers_db";
var dbConnection = process.env.JAWSDB_URL || localConnection;
var connection = mysql.createConnection(dbConnection);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
