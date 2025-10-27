const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isadmin: { type: Boolean, default: false },
});

userSchema.plugin(timeStamp);

const User = mongoose.model("User", userSchema);
module.exports = User;
