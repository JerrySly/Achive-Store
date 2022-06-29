<template>
  <div class="card">
    <user-profile-avatar :user="user"></user-profile-avatar>
    <div class="name">{{ `${user.name} ${user.surname}` }}</div>
    <div class="counts">
      <div style="margin-right: 10px" class="name">
        <span>{{ user.friendsCount }}</span>
        <span style="margin-left: 10px">друзей</span>
      </div>
      <div class="name">
        <span>{{ user.checkCount }}</span
        ><span style="margin-left: 10px">проверок</span>
      </div>
    </div>
    <div class="online-info">
      <div class="point"></div>
      <span>Онлайн</span>
    </div>
    <div class="action-block">
      <div style="margin-bottom: 10px">
        <base-button width="300px" height="40px"
          >Поделиться профилем</base-button
        >
      </div>
      <div>
        <base-button width="300px" height="40px">Настройки профиля</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from "@/data/user.js";
import baseButton from "../base/baseButton.vue";
import UserProfileAvatar from './userProfileAvatar.vue';
export default {
  components: { baseButton, UserProfileAvatar },
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    return {
      user,
    };
  },
};
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