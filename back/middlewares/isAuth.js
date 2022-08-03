const {expressjwt} = require('express-jwt')

console.log(expressjwt);

const getTokenFormHeader = (req) =>{
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] ==='Bearer'){
        return req.headers.authorization.split(' ')[1];
    }
}

module.exports = expressjwt({
    secret:'vHTu634_I3kr3Z',
    algorithms: ['HS256'],
    userProperty: 'token',
    getToken: getTokenFormHeader
})