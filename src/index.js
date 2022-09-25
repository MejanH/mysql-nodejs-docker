const http = require("http");

var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "database",
  user: "root",
  password: "password",
  port: 3306,
});

connection.query("CREATE DATABASE IF NOT EXISTS testdb", function (err, result) {
  if (err) throw err;
  console.log("database created");
});

// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
      res.end(
        JSON.stringify([
          {
            title: "meeting with john doe",
            completed: false,
          },
          {
            title: "buy a keyboard",
            completed: false,
          },
        ])
      );
      break;

    default:
      res.end("no data");
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(8080, undefined, () => {
  console.log(`Server running on http://localhost:8080`);
});
