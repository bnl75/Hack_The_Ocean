var mysql = require('mysql'); //Se importa el módulo MYSQL



// Creating a connection to the database:
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "the-ocean-lighthouse"
});


// Select data from a table in MySQL
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");

    // Query create:
    var sql = 'SELECT * FROM estado';

    // Query execute:
    con.query(sql, function (err, result) {
        if (err) throw err;
        // console.log("Result: " + result);
        console.log(result);
        // console.log(result[6].est_nombre);
    });

    // Close connection database:
    con.end();
});


module.exports = con;