<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Авторизация</div>
      <Form  :validation-schema="scheme">
        <div class="form">
          <div class="form-item">
            <base-validating-field :label="'Email'" name="email" :placeholder="'Your email'" :successMessage="'Correct email'" type="email"></base-validating-field>
          </div>
          <div class="form-item">
             <base-validating-field :label="'Password'" name="password" :placeholder="'Your password'" :successMessage="'Correct password'" type="password"></base-validating-field>
          </div>
        </div>
      </Form>
      <div class="actions">
        <base-button :height="'40px'" :width="'140px'"  @click="entry">Вход</base-button>
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
import BaseButton from "../components/base/baseButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import BaseValidatingField from '../components/base/baseValidatingField.vue';
export default {
  components: { baseInput, BaseButton,Field,Form,ErrorMessage, BaseValidatingField },
  setup() {
    let scheme = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(5).required()
    })
    return {
      scheme,
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
