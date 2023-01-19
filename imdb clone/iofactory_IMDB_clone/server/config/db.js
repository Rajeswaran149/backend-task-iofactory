const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Connection Failed");
  }
};

module.exports = { ConnectDB };
