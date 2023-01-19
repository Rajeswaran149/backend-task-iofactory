const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const hashPassword = (password) => {
  //
  let hashedPassword = bcrypt.hashSync(password, 8);
  return hashedPassword;
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
module.exports = { hashPassword, comparePassword };
