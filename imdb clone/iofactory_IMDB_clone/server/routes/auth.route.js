const { Router } = require("express");
const { signupUser, loginUser } = require("../controller/auth.controller");

const AuthRouter = Router();

AuthRouter.post("/signup", signupUser);
AuthRouter.post("/login", loginUser);

module.exports = { AuthRouter };
