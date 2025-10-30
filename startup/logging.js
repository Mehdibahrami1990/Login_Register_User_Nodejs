const winston = require("winston");
const debug = require("debug")("app:main");
module.exports = function () {
  process.on("uncaughtExeption", (ex) => {
    debug(ex);
    winston.error(ex.message, ex);
    process.exit(1);
  });
  process.on("unhandledExeption", (ex) => {
    debug(ex);
    winston.error(ex.message, ex);
    process.exit(1);
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
