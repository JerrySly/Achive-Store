import axios from "axios";
class UserService{
    async registration(userInfo){
        const result = await axios.post('/sing-up' ,userInfo)
        return result;
    }
    async login(email,password){
        const result = (await axios.post('/login', {email,password})).data
        localStorage.setItem('token', result.token);
        localStorage.setItem('refreshToken', result.refreshToken);
        this.setAuthorizationHeader(result.token)
        return result;
    }
    isLogin(){
        return !!localStorage.getItem('token');
    }
    async getUser(id){
        return (await axios.get('/user/'+id)).data;
    }
    async getCurrentUser(){
        const user =  (await axios.get('/user/0')).data
        console.log(user);
        return user;
    }
    setAuthorizationHeader(token){
        console.log('Token',token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export default new UserService();