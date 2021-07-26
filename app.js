const express = require("express");

const app = express();

app
  .get("/", (req, res) => {
    console.log(req.method);
    res.send("hello from the backend server");
  })
  .post("/", (req, res) => {
    console.log(req.method);

    res.send("Home Page");
  });

app.use("/get-tasks", require("./routes/get-tasks.route"));

app.listen(4000, function () {
  console.log("The app is running ");
});
