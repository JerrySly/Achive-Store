const jwt = require('jsonwebtoken');
const getCurrentUserId = (req) =>{
    const token = req.headers.authorization.split(' ')[1];
    const userInfo = jwt.decode(token);
    return userInfo.data._id;
}
module.exports = getCurrentUserId;