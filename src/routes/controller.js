//autoBind function
const { validationResult } = require("express-validator");
const User = require("../models/user");

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  const propertyNames = Object.getOwnPropertyNames(proto);

  for (const name of propertyNames) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);
    if (
      descriptor &&
      typeof descriptor.value === "function" &&
      name !== "constructor"
    ) {
      instance[name] = proto[name].bind(instance);
    }
  }
}

// Base Controller class

module.exports = class {
  constructor() {
    autoBind(this);
    this.User = User;
    this.validate = this.validate.bind(this);
  }
  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = errors.map((err) => err.msg);
      res.status(400).json({
        message: "validation error",
        data: messages,
      });
      return false;
    }
    return true;
  }
  // validate = (req, res, next) => {
  //   if (!this.validationBody(req, res)) {
  //     return;
  //   }
  //   next();
  // };
  //OR
    validate(req, res, next) {
    const isValid = this.validationBody(req, res);
    if (!isValid) return;
    next();
  }
  response({ res, message, code = 200, data = {} }) {
    res.status(code).json({
      message,
      data,
    });
  }
};
