const auth = require("./auth");
const express = require("express")

const app = express();

auth(app);

module.exports = app;