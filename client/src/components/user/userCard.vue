<template>
  <div class="card">
    <user-profile-avatar :user="user" />
    <div class="name">
      {{ `${user.name} ${user.surname}` }}
    </div>
    <div class="counts">
      <div
        style="margin-right: 10px"
        class="name"
      >
        <span>{{ user.friendsCount }}</span>
        <span style="margin-left: 10px">друзей</span>
      </div>
      <div class="name">
        <span>{{ user.checkCount }}</span><span style="margin-left: 10px">проверок</span>
      </div>
    </div>
    <div class="online-info">
      <div class="point" />
      <span>Онлайн</span>
    </div>
    <div class="action-block">
      <div style="margin-bottom: 10px" >
        <base-button
          width="300px"
          height="40px"
          v-if="isCurrentUser"
        >
          Поделиться профилем
        </base-button>
        <base-button
          width="300px"
          height="40px"
          v-else
        >
          Написать сообщение
        </base-button>
      </div>
      <div v-if="isCurrentUser">
        <base-button
          width="300px"
          height="40px"
        >
          Настройки профиля
        </base-button>
      </div>
      <div v-if="!isCurrentUser">
        <base-button
          width="300px"
          height="40px"
          v-if="!isFriend && !isFriendRequest"
        >
          Добавить в друзья
        </base-button>
        <base-button
          width="300px"
          height="40px"
          v-if="isFriend"
        >
          Удалить из друзей
        </base-button>
        <base-button
          width="300px"
          height="40px"
          v-if="isFriendRequest"
        >
          Ответить на запрос
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileAvatar from './userProfileAvatar.vue'
import FriendService from '@/services/friendService'
import { FRIENDSHIP_STATUSES } from '@/constants/common'
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
export default {
  props: {
    user: {
      type: Object,
      require: true
    }
  },
  components: { UserProfileAvatar },
  setup (props) {
    const store = useStore()
    const currentUser = store.state.user.user
    const user = reactive(props.user)
    const friendshipState = FriendService.getStatusFriendship(user.id)
    const isCurrentUser = computed(() => {
      return user.id === currentUser.id
    })
    const isFriend = computed(() => {
      return friendshipState === FRIENDSHIP_STATUSES.FRIEND
    })
    const isFriendRequest = computed(() => {
      return friendshipState === FRIENDSHIP_STATUSES.REQUEST
    })
    return {
      currentUser,
      user,
      isCurrentUser,
      isFriend,
      isFriendRequest
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  font-family: $main-font;
  border: 1px solid $main-color;
  border-radius: 8px;
  box-shadow: 2px 2px 10px $shadow-color;
  padding: 20px 15px 10px;
  background-color: #fff;
  color: $font-color;

  .name {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 600;
  }
  .counts {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .name {
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      span{
        transition: 0.5s;
      }
    }
    .name span:first-child{
      font-weight: 600;
    }
    .name:hover :first-child {
      color: $main-color;
    }
  }

  .online-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    .point {
      border-radius: 50%;
      background-color: $additional-color;
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }
  .action-block {
    margin-top: 20px;
  }
}
// .border-block {
//   border-top: 1px solid $main-color;
//   width: 100%;
// }
</style>
