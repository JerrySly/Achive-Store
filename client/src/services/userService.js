import axios from "axios";
class UserService{
    async registration(userInfo){
        const result = await axios.post('/sing-up' ,userInfo)
        return result;
    }
    async login(email,password){
        const result = (await axios.post('/login', {email,password})).data
        this._setTokenInfo(result)
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
        return {id,name,surname,email,photo} = user;
    }
    setAuthorizationHeader(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    async refreshToken(){
        const preRefreshToken = localStorage.getItem('refreshToken');
        const result = (await axios.post(`/refresh`,{refreshToken:preRefreshToken})).data;
        this._setTokenInfo(result)
        
    }
    _setTokenInfo({token,refreshToken}){
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
    }   
}

export default new UserService();