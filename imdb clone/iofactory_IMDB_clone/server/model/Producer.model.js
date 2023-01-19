const { Schema, model } = require("mongoose");

const ProducerSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  DOB: { type: String, required: true },
  bio: { type: String, required: true },
});

const ProducerModel = model("producer", ProducerSchema);

module.exports = { ProducerModel };
