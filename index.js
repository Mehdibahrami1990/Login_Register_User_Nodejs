const express = require("express");
const app = express();
const router = require("./src/routes");
const error = require("./src/middlewares/error");


require("./startup/config")(app, express);
require("./startup/db")();
require("./startup/logging")();


app.use("/api", router);
app.use(error);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port :) ${port}`));
