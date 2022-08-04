const userService = require('../services/userService');
module.exports = (app) => {
  app.get("/check", (req, res) => {
    // console.log(req.auth);
    res.status(200).json({ response: userService.checkUserAccess() });
  });
};
