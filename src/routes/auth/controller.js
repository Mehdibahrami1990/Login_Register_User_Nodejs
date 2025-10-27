const controller = require("../controller");

module.exports = new (class extends controller {
  async login(req, res) {
    res.send("login");
  
  }
  async register(req, res) {
    res.send("register");
  }
})();
