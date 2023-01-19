const { Router } = require("express");
const {
  addMovie,
  editMovie,
  deleteMovie,
  getMoviesList,
  getAllActors,
  getAllProducers,
} = require("../controller/movie.controller");
const { requireAuthorized } = require("../middleware/requireAuthorized");
const { requireLogin } = require("../middleware/requireLogin");
const MovieRouter = Router();
MovieRouter.get("/all", getMoviesList);
MovieRouter.get("/actors", getAllActors);
MovieRouter.get("/producers", getAllProducers);
MovieRouter.post("/add", requireLogin, requireAuthorized, addMovie);
MovieRouter.patch("/edit/:movieId", requireLogin, requireAuthorized, editMovie);
MovieRouter.delete(
  "/delete/:movieId",
  requireLogin,
  requireAuthorized,
  deleteMovie
);

module.exports = { MovieRouter };
