const jwt = require("jsonwebtoken");
require("dotenv").config();
const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(404)
      .send({ type: "error", message: "You are not authorized" });
  }
  try {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRETKEY, (err, decode) => {
      if (err || decode === undefined) {
        return res
          .status(400)
          .send({ type: "error", message: "You are not authorized" });
      }
      req.body.user = decode;
      next();
    });
  } catch (error) {
    return res
      .status(400)
      .send({ type: "error", message: "You are not authorized" });
  }
};

module.exports = { requireLogin };
