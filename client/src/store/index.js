import { createStore } from 'vuex'
import { user } from './user.js'
export default createStore({
  modules: {
    user
  },
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    }
  }
})
