const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;
const MovieSchema = new Schema({
  name: { type: String },
  yearOfRelease: { type: Number },
  poster: { type: String },
  plot: { type: String },
  producer: { type: ObjectId, ref: "producer" },
  actors: [
    {
      actorId: { type: ObjectId, ref: "actor" },
    },
  ],
});

const MovieModel = model("movie", MovieSchema);

module.exports = { MovieModel };
