const friendshipState = require("../constants/friendshipState");
const dbService = require("../dbService");
const { v4: uuidv4 } = require('uuid');

class FriendService{
    sendRequest(currentUserId,friendId){
        let id = uuidv4();
        dbService.add('friendships', id, {
            id,
            firstUser: currentUserId,
            secondUser: friendId,
            state: friendshipState.request
        })
    }
    isFriend(currentUserId,friendId){
        return this.getFriendship(currentUserId,friendId).state === friendshipState.friend
    }
    getFriendship(currentUserId,friendId){
        const results = dbService.getByField('friendships','firstName',currentUserId)
        const [friendship] = results.filter(x=>x.secondUser == friendId);
        return friendship;
    }
    approveRequest(currentUserId,friendId){
        const friendship = this.getFriendship(currentUserId,friendId);
        if(!friendship||this.getFriendship(currentUserId,friendId).state !== friendshipState.request)
            return;
        
        dbService.put('friendships',friendship.id, {
            id:friendship.id,
            firstUser: friendship.firstUser,
            secondUser: friendship.secondUser,
            state: friendshipState.friend
        })
    }
    removeFromFriend(currentUserId,friendId){
        const myFriendship = this.getFriendship(currentUserId,friendId);
        const hisFriendship = this.getFriendship(friendId,currentUserId);
        dbService.delete('friendships', myFriendship.id)
        dbService.delete('friendships', hisFriendship.id)
    }

    getPossibleFriends(currentUserId,pageSize,pageNumber){
        const usersObject = dbService.getAll('users');
        let users = [];
        for(let id in usersObject){
            users.push(usersObject[id]);
        }
        users = users.filter(x=>x.id != currentUserId);
        const friendships =  dbService.getAll('friendships');
        console.log('Friendships: ',friendships,friendships == null);
        if(!friendships || friendships === null)
            return []
        const usersId = friendships.filter(x=>x.firstUser == currentUserId).map(x=>x.secondUser);
        if(usersId != [])
            users = users.filter(x=>usersId.find(x.id) == -1)
        return users.slice(pageSize*pageNumber,(pageSize*pageNumber)+pageSize);
    }
}
module.exports = new FriendService();