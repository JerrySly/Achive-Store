import userService from "@/services/userService";
const token = JSON.parse(localStorage.getItem("token"));
const initState = token
  ? { status: { loggedIn: true }, token }
  : { status: { loggedIn: false }, token: null };
export const auth = {
    namespaced: true,
    state: initState,
    actions:{
        async singUp({commit},{email,password}){
            console.log('SingUp');
            let result = await userService.registration(email,password);
            if(result.user != null){
             commit('loginSuccess',result.user);
             localStorage.setItem('token',result.token)
            }
        },
        async login({commit},{email,password}){
            let result = await userService.login(email,password);
            console.log('Store:',result);
            if(result.user != null){
             commit('loginSuccess',result.user);
             localStorage.setItem('token',result.token)
            }
        }
    },
    mutations:{
        loginSuccess(state,token){
            state.token = token;
            state.loggedIn = true;
        }
    }
};
