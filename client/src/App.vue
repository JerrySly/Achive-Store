<template>
  <div>
    <nav-bar />
    <div class="main-wrapper">
      <Transition name="slide">
      <div class="dialog-wrapper" v-if="error">
      <base-dialog >
        <template #header>
          <span class="error-title">Ошибка</span>
        </template>
        {{ error }}
        <template #actions>
          <base-button
            class="cancel-btn"
            :color="'white'"
            :height="'40px'"
            @click="clearError"
          >
            Cancel
          </base-button>
        </template>
      </base-dialog>
      </div>
      </Transition>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import userService from '@/services/userService.js'
export default {
  components: {
    NavBar
  },
  setup () {
    const store = useStore()
    const token = computed(() => store.state.user.token)
    if (token.value) {
      userService.setAuthorizationHeader(token.value)
      store.dispatch('user/getCurrentUser')
    }
    const error = computed(() => store.state.error)
    const clearError = () => {
      store.commit('setError', null)
    }
    return {
      error,
      clearError
    }
  }
}
</script>
<style >

.dialog-wrapper{
  position: absolute;
  display: flex;
  width: 80%;
  height: 100vh;
  justify-content: center;
}
.error-title {
  color:red;
  font-size: 32px;
}
.main-wrapper{
  margin: 20px 0px;
  padding:0px 10%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
   background-color: #fddddd59;
   padding: 0;
   margin: 0;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
