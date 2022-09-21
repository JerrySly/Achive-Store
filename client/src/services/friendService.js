import axios from 'axios'

class FriendService {
  sendInvite (userId) {}
  approveInvite (userId) {}
  async getPossibleFriends () {
    let users = (await axios.get('/friend/page/1/size/5')).data
    return users
  }
}
export default new FriendService()
