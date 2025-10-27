const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("app:main");
const router = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("connected to mongodb :)"))
  .catch(() => debug("could not connet :("));

app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port :) ${port}`));
