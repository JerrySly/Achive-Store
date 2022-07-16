import { backUrl } from "@/settings/settings";
import axios from "axios";
class UserService{
    async registration(email,password){
        const result = await axios.post(backUrl +'/sing-up' ,{email,password})
        return result;
    }
    async login(email,password){
        const result = await axios.post(backUrl+'/login', {email,password})
        console.log('UserService: ',result);
        return result.data;
    }
}

export default new UserService();