const friendService = require("../services/friendService"); 
const getCurrentUserId = require("../helpers/getCurrentUserId");




module.exports = (app) =>{
    app.post('friend',(req,res)=>{
        const {friendId} = req.body;
        const currentUserId = getCurrentUserId(req);
        friendService.sendRequest(currentUserId,friendId);
        res.status(200).end();
    })
    app.get('/friend/:friendId', (req,res) =>{
        const {friendId} = req.params;
        const currentUserId = getCurrentUserId(req);
        const result = friendService.getFriendship(currentUserId,friendId);
        res.status(200).json(result);
    })
    app.put('friend/:friendId',(req,res)=>{
        const {friendId} = req.params;
        const currentUserId = getCurrentUserId(req);
        const result = friendService.approveFriendship(currentUserId,friendId);
        res.status(200).json(result);
    })
    app.delete('friend/:friendId', (req,res)=>{
        const {friendId} = req.params;
        const currentUserId = getCurrentUserId(req);
        const result = friendService.removeFromFriend(currentUserId,friendId);
        res.status(200).json(result);
    })
    app.get('/friend/page/:pageNumber/size/:pageSize', (req,res) =>{
        const {pageSize,pageNumber} = req.params;
        const currentUserId = getCurrentUserId(req);
        console.log('Friends list',currentUserId,pageSize,pageNumber)
        const result = friendService.getPossibleFriends(currentUserId,pageSize,pageNumber);
        res.status(200).json(result)
    })
}
