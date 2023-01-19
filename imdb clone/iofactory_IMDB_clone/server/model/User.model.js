const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "viewer"], default: "viewer" },
});

const UserModel = model("user", UserSchema);

module.exports = { UserModel };
