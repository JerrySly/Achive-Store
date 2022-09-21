<template>
  <div class="list-container">
    <user-card-list-item
      v-for="(user,index) in users"
      :key="index"
      :user="user"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import userCardListItem from './userCardListItem.vue'
export default {
  components: { userCardListItem },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    let users = reactive(props.users)
    return {
      users
    }
  }
}
</script>

<style scoped>

</style>
