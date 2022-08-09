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
}
module.export = new FriendService();