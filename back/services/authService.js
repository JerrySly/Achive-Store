const argon2 = require("argon2");
const dbService = require("../dbService");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const userService = require("./userService");
class AuthService {
  async registration(email, password, name, surname) {
    try {
      const hashedPassword = await argon2.hash(password);
      let user = new User(name, surname, email, hashedPassword);
      dbService.add("users", user);

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
    if(userRecord == null || userRecord == undefined )
        return null;
    let isVerify = await argon2.verify(userRecord.hashPassword,password);
    if(!isVerify)
        throw new Error('Incorrect password')
    return {
        user:{
            name: userRecord.name,
            email: userRecord.email
        },
        token: this._generateToken(userRecord)
    }
  }

  _generateToken(user) {
    const data = {
      _id: user.id,
      name: user.name,
      email: user.email,
    };
    const devSignature = "vHTu634_I3kr3Z";
    const expiration = "6h";

    return jwt.sign({ data }, devSignature, { expiresIn: expiration });
  }
}

module.exports = new AuthService();
