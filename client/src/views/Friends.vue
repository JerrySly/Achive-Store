<template>
  <div class="row">
    <div class="flex: 9">
      <div class="card">
        <users-card-list :users="users" />
      </div>
    </div>
    <div style="flex: 3" />
  </div>
</template>

<script>
import usersCardList from '../components/user/usersCardList.vue'
import friendService from '@/services/friendService'
import { reactive } from 'vue'
export default {
  components: { usersCardList },
  setup () {
    let users = reactive([])
    let possibleFriends = reactive([])
    friendService.getPossibleFriends().then(data => { users = data }).then(x => possibleFriends.push([...x]))
    return {
      users,
      possibleFriends
    }
  }
}
</script>

<style scoped lang="scss">

</style>
