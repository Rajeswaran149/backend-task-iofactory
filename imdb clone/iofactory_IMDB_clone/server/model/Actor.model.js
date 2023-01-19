const { Schema, model } = require("mongoose");

const ActorSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: { type: String, required: true },
});

const ActorModel = model("actor", ActorSchema);

module.exports = { ActorModel };
