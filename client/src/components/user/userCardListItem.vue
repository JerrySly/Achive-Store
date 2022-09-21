<template>
  <div class="card">
    <div class="avatar">
      <img
        :src="user.photo"
        alt="Need photo"
      >
    </div>
    <div class="name">
      {{ user.name + " "+ user.surname }}
    </div>
    <div
      v-if="type == TYPES_CARD_LIST.FRIENDS"
      class="common-friends"
    />
    <div class="card-actions">
      <base-button v-if="type == TYPES_CARD_LIST.FRIENDS">
        Отправить заявку
      </base-button>
      <base-button v-if="type == TYPES_CARD_LIST.FRIENDS">
        Удалить из друзей
      </base-button>
    </div>
  </div>
</template>

<script>
import { TYPES_CARD_LIST } from '@/constants/common.js'
import baseButton from '../base/baseButton.vue'
import { ref } from 'vue'
export default {
  components: { baseButton },
  props: {
    user: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: TYPES_CARD_LIST.FRIENDS
    }
  },
  setup (props) {
    const type = ref(props.type)
    const user = ref(props.user)
    return {
      type,
      user
    }
  }
}
</script>

<style scoped>

</style>
