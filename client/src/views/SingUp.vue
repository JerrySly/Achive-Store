<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Регистрация</div>
      <Form @invalid-submit="invalidSubmit"  :validation-schema="scheme" @submit="submit">
      <div class="form">
        <div class="form-item">
          <base-validating-field  :label="'Name'" name="name" :placeholder="'Your name'"   type="text"></base-validating-field>
        </div>
        <div class="form-item">
          <base-validating-field  :label="'Surname'" name="surname" :placeholder="'Your surname'"  type="text"></base-validating-field>
        </div>
        <div class="form-item">
          <base-validating-field  :label="'Email'" name="email" :placeholder="'Your email'"  type="email"></base-validating-field>
        </div>
        <div class="form-item">
          <base-validating-field  :label="'Password'" name="password" :placeholder="'Your password'"  type="password"></base-validating-field>
        </div>
        <div class="form-item">
          <base-validating-field  :label="'Repeat password'" name="repeatPassword" :placeholder="'Repeat your password'"  type="password"></base-validating-field>
        </div>
      </div>
      <div class="actions">
        <router-link :to="{name:'Authorization'}">
          <base-button :height="'40px'" :width="'140px'">{{
            "< Назад"
          }}</base-button>
        </router-link>
        <base-button :type="'submit'" :height="'40px'" :width="'140px'"
          >Сохранить</base-button
        >
      </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import * as yup from "yup";
import {shake} from "@/helpers/animation-methods.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from 'vue-router';

export default {
  components:{
    Form,
    Field,
    ErrorMessage
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const scheme = yup.object().shape({
      name: yup.string().min(2).required(),
      surname: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(5).required(),
      repeatPassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords do not match'),
    })
    const submit = async (values) => {
      await store.dispatch('auth/singUp', values);
      router.push({name:'Authorization'});
    }
    const invalidSubmit = () => {
      let card = document.getElementsByClassName('card')[0];
      shake(card);
    }
    
    
    return{
      scheme,
      submit,
      invalidSubmit,
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  .card {
    margin-top: 150px;
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
