
const dbService = require("../dbService")
class UserService{
    getUserById(id){
        console.log(id);
        return dbService.get('users',id);
    }
    getUserByEmail(email){
        return  dbService.getByField('users','email',email)
    }
    checkUserAccess(){
        return 'Access successful';
    }
}
module.exports = new UserService();