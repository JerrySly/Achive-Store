<template>
  <div class="row">
    <div style="flex: 3">
      <user-card />
    </div>
    <div class="spacer" />
    <div style="flex: 6">
      <user-info />
      <user-achieves style="margin-top:20px" />
      <user-wall style="margin-top:20px" />
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
// import { useStore } from 'vuex'
// import { computed } from 'vue'
export default {
  components: { userCard, userInfo, UserAchieves, UserWall },
  // props: {
  //   id: {
  //     type: String
  //   }
  // },
  setup (props) {
    // const store = useStore()
    // const currentUser = computed(() => store.state)
  }
}
</script>

<style lang="scss" scoped>

</style>
