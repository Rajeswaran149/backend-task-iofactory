const { ActorModel } = require("../model/Actor.model");
const { MovieModel } = require("../model/Movie.model");
const { ProducerModel } = require("../model/Producer.model");

const getMoviesList = async (req, res) => {
  try {
    await MovieModel.find({})
      .populate("actors.actorId", "name")
      .populate("producer", "name")
      .then((results) =>
        res.status(201).send({ type: "success", movies: results })
      );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ type: "error", message: "An error occured" });
  }
};

const addMovie = async (req, res) => {
  try {
    const movie = await new MovieModel(req.body);
    await movie.save();
    return res
      .status(201)
      .send({ type: "success", message: "Movie added Successfully" });
  } catch (error) {
    return res.status(400).send({ type: "error", message: "Movie not added" });
  }
};

const editMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    await MovieModel.findByIdAndUpdate(movieId, req.body);
    return res.status(201).send({ type: "success", message: "Movie updated." });
  } catch (error) {
    return res
      .status(400)
      .send({ type: "error", message: "Movie not updated" });
  }
};
const deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    await MovieModel.findByIdAndDelete(movieId, (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ type: "error", message: "Movie not deleted" });
      }
    });
    return res.status(201).send({ type: "success", message: "Movie deleted." });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ type: "error", message: "Movie not deleted" });
  }
};

const getAllProducers = async (req, res) => {
  try {
    const producers = await ProducerModel.find();
    return res.status(201).send(producers);
  } catch (error) {
    return res.status(201).send([]);
  }
};
const getAllActors = async (req, res) => {
  try {
    const actors = await ActorModel.find();
    return res.status(201).send(actors);
  } catch (error) {
    return res.status(201).send([]);
  }
};

module.exports = {
  getMoviesList,
  addMovie,
  editMovie,
  deleteMovie,
  getAllProducers,
  getAllActors,
};
