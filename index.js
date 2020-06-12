const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

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

const dataPath = "./users.json";

app.get("/users", (req, res, next) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.get("/users/:id", (req, res, next) => {
  const userId = Number(req.params.id);
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    const users = JSON.parse(data);
    const user = users.find(user => user.id === userId);
    if (!user) {
      res.status(500).send("Account not found.");
    } else {
      res.send(user);
    }
  });
});
