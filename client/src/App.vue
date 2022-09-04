<template>
  <div>
    <nav-bar />
    <div class="main-wrapper">
      <div class="dialog-wrapper" v-show="error">
      <base-dialog  class="slide-enter-active">
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
  height: 50vh;
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

</style>
