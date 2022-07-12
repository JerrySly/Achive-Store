
const dbService = require("../dbService")
class UserService{
    getUserById(id){
        return dbService.get('users',id);
    }
    getUserByEmail(email){
        return  dbService.getByField('users','email',email)
    }
}
module.exports = new UserService();