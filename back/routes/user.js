const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
module.exports = (app) => {
  app.get("/user/:id", async (req,res) =>{
    try{
    const {id} = req.params;
    let user;
    if(id == '0')
    {
      const token = req.headers.authorization.split(' ')[1];
      const userInfo = jwt.decode(token);
      user = await userService.getUserById(userInfo.data._id);
    }
    else
    user = await userService.getUserById(id);
    console.log(user);
    res.status(200).json(user).end();
    }
    catch(err){
      res.status(404).json({
        error: "Can't get user",
        errorLog:err
      })
    }
  })
};
