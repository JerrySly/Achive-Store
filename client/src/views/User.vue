<template>
  <div class="row">
    <div style="flex: 3" v-if="userForProfile">
      <user-card :user="userForProfile"/>
    </div>
    <div class="spacer" />
    <div style="flex: 6">
      <user-info :user="userForProfile"/>
      <user-achieves :user="userForProfile" style="margin-top:20px" />
      <user-wall :user="userForProfile" style="margin-top:20px" />
    </div>
    <div class="spacer" />
    <div style="flex: 3" />
  </div>
</template>

<script>
import userCard from '@/components/user/userCard.vue'
import userInfo from '@/components/user/userInfo.vue'
import UserAchieves from '../components/user/userAchieves.vue'
import UserWall from '../components/user/userWall.vue'
import userService from '@/services/userService.js'

import { useRoute } from 'vue-router'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { userCard, userInfo, UserAchieves, UserWall },
  setup () {
    const route = useRoute()
    let userForProfile = ref(null)
    let userId = route.params.id
    onMounted(async () => {
      userForProfile.value = await userService.getUser(userId)
    })
    return {
      userForProfile,
      userId
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
