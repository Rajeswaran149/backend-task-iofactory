const requireAuthorized = (req, res, next) => {
  if (req.body.user?.role === "admin") {
    next();
  } else {
    return res
      .status(400)
      .send({ type: "error", message: "You are not authorized" });
  }
};

module.exports = { requireAuthorized };
