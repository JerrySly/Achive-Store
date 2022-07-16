<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Регистрация</div>
      <div class="form">
        <div>
          <base-input :placeholder="'Email'" v-model="model.email"></base-input>
        </div>
        <div>
          <base-input
            :placeholder="'Password'"
            v-model="model.password"
            :type="'password'"
          ></base-input>
        </div>
        <div>
          <base-input
            :placeholder="'Repeat password'"
            v-model="model.repeatPassword"
            :type="'password'"
          ></base-input>
        </div>
      </div>
      <div class="messages" v-if="alertText">
        <base-alert-message
          ><span>{{ alertText }}</span></base-alert-message
        >
      </div>
      <div class="actions">
        <base-button :height="'40px'" :width="'140px'">{{
          "< Назад"
        }}</base-button>
        <base-button @click="singUp" :height="'40px'" :width="'140px'">Сохранить</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import baseAlertMessage from "../components/base/baseAlertMessage.vue";
import {useStore} from "vuex";
export default {
  components: { baseAlertMessage },
  setup(props,context) {
    let model = reactive({
      email: "",
      password: "",
      repeatPassword: "",
    });
    const store =  useStore();
    let alertText = ref(`Заполните все поля на форме`);
    const singUp = async () =>{
      const result = await store.dispatch('auth/login',{email:'jekasyper007@yandex.ru',password:'12345678'});
      console.log(result);
    }
    return {
      model,
      alertText,
      singUp
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
    .messages {
      padding: 0px 10px 0px;
      margin-bottom: 20px;
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
