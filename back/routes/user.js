const isAuth = require('../middlewares/isAuth');
const userService = require('../services/userService');
module.exports = (app) => {
  app.get("/check",isAuth, (req, res) => {
    // console.log(req.auth);
    res.status(200).json({ response: userService.checkUserAccess() });
  });
};
