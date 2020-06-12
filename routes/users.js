const express = require("express");

const router = express.Router();

const fs = require("fs");

const dataPath = "./users.json";

router.get("/users", (req, res, next) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

router.get("/users/:id", (req, res, next) => {
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

module.exports = router;
