const authService = require("../services/authService");
const userService = require("../services/userService");

module.exports = (app) => {
  app.post("/sing-up", (req, res) => {
    let { name, email, password, surname } = req.body;
    try {
      let { user, token } = authService.singUp(email, password, name, surname);
      console.log(user);
      res.json({ user, token }).status(200).end();
    } catch (err) {
      res.status(403)
        .json({
          error: "SingUp error",
        })
    }
  });

  app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
      let { user, token,refreshToken } = await authService.login(email, password);
      console.log(user);
      res.json({ user, token,refreshToken }).status(200).end();
    } catch (err) {
      console.log(err);
      res.status(403)
        .json({
          error: "Login error",
        })
    }
  });

  app.post("/refresh", async (req,res) =>{
    
    let {refreshToken} = req.body;
    try{
    const result = await authService.refreshToken(refreshToken);
    res.status(200).json(result);
    }
    catch(err){
      console.log(err);
      res.status(403).json({
        error: "Refresh failed"
      })
    }
  })

  app.get("/get-user" , (req,res)=>{
    const token  = req.headers['Authorization'];
  })
  
};
