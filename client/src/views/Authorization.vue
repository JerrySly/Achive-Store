<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Авторизация</div>
      <div class="form">
        <div class="form-item">
          <base-input :placeholder="'Email'" v-model="model.email"></base-input>
          <div v-if="errorsMessages.email" class="error-message">
            {{ errorsMessages.email }}
          </div>
        </div>
        <div class="form-item">
          <base-input
            :placeholder="'Password'"
            v-model="model.password"
            :type="'password'"
          ></base-input>
          <div v-if="errorsMessages.password" class="error-message">
            {{ errorsMessages.password }}
          </div>
        </div>
      </div>
      <div class="actions">
        <base-button :height="'40px'" :width="'140px'">Вход</base-button>
        <router-link :to="{ name: 'Registration' }">
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
import { reactive, ref } from "@vue/reactivity";
import baseInput from "../components/base/baseInput.vue";
import * as yup from "yup";
import { useField } from "vee-validate";
import BaseButton from "../components/base/baseButton.vue";
export default {
  components: { baseInput, BaseButton },
  setup() {
    let model = reactive({
      email: "",
      password: "",
    });
    const errorsMessages = reactive({});
    function setField(name, yupRule) {
      let { value, errorMessage } = useField(name, yupRule);
      model[name] = value;
      errorsMessages[name] = errorMessage;
    }
    setField("email", yup.string().required().email());
    setField("password", yup.string().required().min(8));
    return {
      model,
      errorsMessages,
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
      .form-item {
        margin-bottom: 20px;
        .error-message {
          text-align: left;
          margin-top: 5px;
          margin-left: 5px;
        }
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
