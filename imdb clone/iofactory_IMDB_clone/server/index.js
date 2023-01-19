const express = require("express");
const cors = require("cors");
const { ConnectDB } = require("./config/db");
const { AuthRouter } = require("./routes/auth.route");
const { MovieRouter } = require("./routes/movie.route");
const User = require("./model/User.model");
const Producer = require("./model/Producer.model");
const Actor = require("./model/Actor.model");
const Movie = require("./model/Movie.model");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/movie", MovieRouter);
app.listen(PORT, async (req, res) => {
  try {
    await ConnectDB();
    console.log(`App is running on PORT : ${PORT}`);
  } catch (error) {
    console.log("App is not connected");
  }
});
