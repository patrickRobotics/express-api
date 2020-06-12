const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send(
    "This is a simple ExpressJS app with a REST API endpoint - test with api/v1/users and api/v1/users/[id]"
  );
});

app.use("/api/v1/", userRoutes);
