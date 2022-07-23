import userService from "@/services/userService";
export const auth = {
    namespaced: true,
    state: {
        token: null
    },
    actions:{
        async singUp({commit},{email,password}){
            console.log('SingUp');
            let result = await userService.registration(email,password);
            if(result.user != null){
             commit('loginSuccess',result.token);
            }
        },
        async login({commit},{email,password}){
            let result = await userService.login(email,password);
            if(result.user != null){
             commit('loginSuccess',result.token);
            }
        }
    },
    mutations:{
        loginSuccess(state,token){
            state.token = token;
        }
    }
};
