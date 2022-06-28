<template>
  <div class="card">
    <img :src="user.avatar" alt="" />
    <div class="name">{{ `${user.name} ${user.surname}` }}</div>
    <div class="border-block" style="margin-top: 10px"></div>
    <div class="online-info">
      <div class="point"></div>
      <span>Онлайн</span>
    </div>
    <div class="border-block" style="margin-top: 5px"></div>
    <div class="action-block">
      <div>
        <icon-share
          :width="70"
          :height="70"
          :color="'rgb(38, 172, 33)'"
        ></icon-share>
      </div>
      <div class="divide"></div>
      <div>
        <icon-settings
          :width="70"
          :height="70"
          :color="'rgb(38, 172, 33)'"
        ></icon-settings>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from "@/data/user.js";
export default {
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
  img {
    min-width: 120px;
    min-height: 120px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 5px;
  }
  .name {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 600;
  }

  .online-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;

    .point {
      border-radius: 50%;
      background-color: $additional-color;
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }
  .action-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    div {
      cursor: pointer;
    }
    .divide {
      border-left: 1px solid $main-color;
      height: 50px;
    }
  }
}
.border-block {
  border-top: 1px solid $main-color;
  width: 100%;
}
</style>