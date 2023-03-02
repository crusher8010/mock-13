const express = require("express");
const { Game } = require("../controller/gameController");

const Router = express.Router();

Router.route("/game").get(Game);

module.exports = Router;