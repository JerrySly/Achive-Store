import userService from '@/services/userService'
export const user = {
  namespaced: true,
  state: {
    user: null,
    token: localStorage.getItem('token')
  },
  mutations: {
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    async singUp ({ commit }, userInfo) {
      await userService.registration(userInfo)
    },
    async login ({ commit }, { email, password }) {
      const result = await userService.login(email, password)
      console.log(result)
      if (result.user) {
        commit('setUser', result)
      } else {
        commit('setError', result.error, { root: true })
      }
    },
    async getCurrentUser ({ commit }) {
      const result = await userService.getCurrentUser()
      commit('setUser', result)
    }
  }
}
