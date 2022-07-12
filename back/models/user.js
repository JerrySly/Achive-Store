const { v4: uuidv4 } = require('uuid');

class User{
    constructor(name,surname,email,hashPassword){
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.hashPassword = hashPassword 
        this.photo = null;
    }
}
module.exports = User;