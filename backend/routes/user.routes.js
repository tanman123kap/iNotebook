const express = require("express");
const userRouter = express.Router();
const {userSignup, userLogin, getUser} = require("../controllers/user.controllers.js");
const {body} = require("express-validator");
const authUser = require("../middleware/auth.js");

userRouter.post("/signup", [
    body("name", "Enter a valid Name.").isLength({min: 3}),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password is weak.").isLength({min: 8})
], userSignup);
userRouter.post("/login", [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password is weak.").isLength({min: 8})
], userLogin);
userRouter.post("/getUser", authUser, getUser);

module.exports = userRouter;