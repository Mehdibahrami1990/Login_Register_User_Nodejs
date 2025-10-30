const winston = require("winston");

module.exports = (err, req, res, next) => {
  winston.error(err.message, err)
  console.error(err); 
  res.status(500).json({
    code: 500,
    message: "(server error) something failed",
  });
};
