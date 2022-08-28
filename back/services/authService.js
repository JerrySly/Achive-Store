const argon2 = require("argon2");
const dbService = require("../dbService");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const userService = require("./userService");
const { v4: uuidv4 } = require('uuid');

class AuthService {
  async singUp(email, password, name, surname) {
    try {
      const hashedPassword = await argon2.hash(password);
      let user = new User(name, surname, email, hashedPassword);
      dbService.add("users",user.id, user);

      let token = this._generateToken(user);
      
      return {
        user: {
          email,
          name,
          surname,
        },
        token,
      };
    } catch (err) {
      console.log("Password has not be hashed");
    }
  }

  async login(email, password) {
    let userRecord = userService.getUserByEmail(email)[0];
    if(userRecord == null || userRecord == undefined ){
        throw new Error('Incorrect email')
    }
    let isVerify = await argon2.verify(userRecord.hashPassword,password);
    const refreshToken = uuidv4();
    dbService.put('refreshTokens',userRecord.id,{
      userId:userRecord.id,
      refreshToken
    })
    if(!isVerify)
        throw new Error('Incorrect password')
    return {
        user:{
            name: userRecord.name,
            email: userRecord.email,
            id: userRecord.id,
            surname: userRecord.surname
        },
        token: this._generateToken(userRecord),
        refreshToken
        
    }
  }

  async refreshToken(refreshToken){
    const refreshTokenData = dbService.getByField('refreshTokens','refreshToken',refreshToken);
    if(!refreshTokenData){
      throw Error('Token is invalid')
    }
    const user  = userService.getUserById(refreshTokenData[0].userId);
    if(!user)
      throw Error('Token is invalid')
    const token = this._generateToken(user);
    refreshToken =  uuidv4();
    dbService.put('refreshTokens',user.id,{
      userId:user.id,
      refreshToken
    })
    return {
      token,
      refreshToken
    }
  }
  _generateToken(user) {
    const data = {
      _id: user.id,
      name: user.name,
      email: user.email,
    };
    const devSignature = "vHTu634_I3kr3Z";
    const expiration = "2m";

    return jwt.sign({ data }, devSignature, { expiresIn: expiration });
  }
}

module.exports = new AuthService();
