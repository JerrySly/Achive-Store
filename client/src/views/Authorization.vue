<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Авторизация</div>
      <div class="form">
        <div>
          <base-input :placeholder="'Email'" v-model="email"></base-input>
        </div>
        <div>
          <base-input
            :placeholder="'Password'"
            v-model="password"
            :type="'password'"
          ></base-input>
        </div>
      </div>
      <div class="actions">
        <base-button :height="'40px'" :width="'140px'">Вход</base-button>
        <router-link :to="{name:'Registration'}">
          <base-button
            class="btn-without-background"
            :height="'40px'"
            :width="'140px'"
            >Регистрация</base-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import baseInput from "../components/base/baseInput.vue";
import BaseButton from "../components/base/baseButton.vue";
export default {
  components: { baseInput, BaseButton },
  setup() {
    let email = ref("");
    let password = ref("");
    return {
      email,
      password,
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  .card {
    margin-top: 200px;
    min-width: 400px;
    max-width: 600px;
    padding: 10px 0 10px 0;
    .title {
      font-size: 28px;
      border-bottom: 1px solid $main-color;
      padding-bottom: 10px;
    }
    .form {
      margin-top: 10px;
      padding: 0px 18px 0px 10px;
      div {
        margin-bottom: 20px;
      }
    }
    .actions {
      border-top: 1px solid $main-color;
      padding-top: 10px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
