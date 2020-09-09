var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    // console.log(result.affectedRows); - after insert, update, delete etc
    // console.log(result.insertId);     - after inserting rows into auto-id table
    console.log('1st record address is -> ' + result[0].address);
    console.log(fields);
    console.log('fileds[1].name -> ' + fields[0].name);
  });
});
