const router = require("express").Router();
// const connection = require("../db");
router.get("/", function (req, res) {
  // connection.query("select * from Tasks", function (err, results, fields) {
  //   console.log(results[0]);
  //   res.send(results);
  // });
  res.send("results");
});

module.exports = router;
