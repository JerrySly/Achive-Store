import { backUrl } from "@/settings/settings";
import axios from "axios";
class UserService{
    async registration(userInfo){
        const result = await axios.post(backUrl +'/sing-up' ,userInfo)
        return result;
    }
    async login(email,password){
        const result = (await axios.post(backUrl+'/login', {email,password})).data
        localStorage.setItem('token', result.token);
        axios.defaults.headers.common['Authorization'] = result.token;
        return result;
    }
    isLogin(){
        return !!localStorage.getItem('token');
    }
    async getUser(){
        return (await axios.get(backUrl+'/get-user')).data;
    }
}

export default new UserService();