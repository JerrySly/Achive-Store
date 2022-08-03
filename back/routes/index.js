const auth = require("./auth");
const user = require("./user");
const express = require("express")

const app = express();

auth(app);
user(app);

module.exports = app;