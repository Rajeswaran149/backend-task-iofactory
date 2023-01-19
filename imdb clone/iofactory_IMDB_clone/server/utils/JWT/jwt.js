const jwt = require("jsonwebtoken");
require("dotenv").config();

const signJwtToken = (role, id) => {
  return jwt.sign({ role: role, id: id }, process.env.SECRETKEY);
};

const verifyJwtToken = (token) => {
  return jwt.verify(token, process.env.SECRETKEY);
};

module.exports = { signJwtToken, verifyJwtToken };
