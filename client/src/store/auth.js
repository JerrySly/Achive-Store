import userService from "@/services/userService";
export const auth = {
  namespaced: true,
  state: {
    user: null
  },
  mutations:{
    setUser(state,user){
        state.user =  user;
    }
  },
  actions: {
    async getUser({commit}){
        commit('setUser',user);
    },
    async singUp({ commit }, userInfo) {
        await userService.registration(userInfo);
    },
    async login({ commit }, { email, password }) {
        const result = await userService.login(email, password);
        commit('setUser',result.user);
    },
  },
};
