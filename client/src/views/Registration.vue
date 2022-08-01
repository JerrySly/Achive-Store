<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Регистрация</div>

      <div class="form">
        <div class="form-item">
          <base-input :placeholder="'Email'" v-model="model.email"></base-input>
          <div v-if="errors.email" class="error-message">
            {{ errors.email }}
          </div>
        </div>

        <div class="form-item">
          <base-input
            :placeholder="'Password'"
            v-model="model.password"
            :type="'password'"
          ></base-input>
          <div v-if="errors.password" class="error-message">
            {{ errors.password }}
          </div>
        </div>

        <div class="form-item">
          <base-input
            :placeholder="'Repeat password'"
            v-model="model.repeatPassword"
            :type="'password'"
          ></base-input>
          <div v-if="errors.repeatPassword" class="error-message">
            {{ errors.repeatPassword }}
          </div>
        </div>
      </div>

      <div class="actions">
        <router-link :to="{name:'Authorization'}">
        <base-button :height="'40px'" :width="'140px'">{{
          "< Назад"
        }}</base-button>
        </router-link>
        <base-button @click="singUp" :height="'40px'" :width="'140px'"
          >Сохранить</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import * as yup from "yup";
import {shake} from "@/helpers/animation-methods.js";
import { useForm } from 'vee-validate';
import { computed } from '@vue/runtime-core';
export default {
  setup(props, context) {
    let model = computed(() => { return yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      repeatPassword: yup.string().required().oneOf([yup.ref('password'),null],'Passwords must match'),
    })});
    const store = useStore();
    
    return{
      model,
      errors
    }
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
