const express = require("express");

const router = express.Router();

const fs = require("fs");

const dataPath = "./data/users.json";

const userCtrl = require("../controllers/users");

router.get("/users", userCtrl.getUsers);

router.get("/users/:id", userCtrl.getUser);

module.exports = router;
