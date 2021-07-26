const { createConnection } = require("mysql");
const connection = createConnection({
  host: "db",
  user: "root",
  password: "Ubuntu@pa$$wOr1d",
  database: "database_development",
});

connection.connect();

module.exports = connection;
