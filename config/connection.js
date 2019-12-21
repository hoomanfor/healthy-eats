// require("dotenv").config({ path: "../.env" });
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PW,
  database: "healthy_db"
});

connection.connect(error => {
  if (error) {
    console.error(`error connecting: ${error.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;