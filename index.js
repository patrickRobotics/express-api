const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send(
    "This is a simple ExpressJS app with a REST API endpoint - test with /users and /users/id"
  );
});

app.use("/api/v1/", userRoutes);
