const fs = require("fs");
const dataPath = "./data/users.json";

exports.getUsers = (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({ err });
    }
    res.status(200).send({
      users: JSON.parse(data)
    });
  });
};

exports.getUser = (req, res) => {
  const userId = Number(req.params.id);
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({ err });
    }
    const users = JSON.parse(data);
    const user = users.find(user => user.id === userId);
    if (!user) {
      res.status(500).send("Account not found.");
    } else {
      res.status(200).send({
        user: user
      });
    }
  });
};
