const auth = require("./auth");
const user = require("./user");
const isAuth = require('../middlewares/isAuth');
const express = require("express")

const app = express();

auth(app);
app.use(isAuth)
user(app);

module.exports = app;