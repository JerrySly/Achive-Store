<template>
  <div class="wrapper">
    <div class="card">
      <div class="title">Регистрация</div>

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

        <div class="form-item">
          <base-input
            :placeholder="'Repeat password'"
            v-model="model.repeatPassword"
            :type="'password'"
          ></base-input>
          <div v-if="errorsMessages.repeatPassword" class="error-message">
            {{ errorsMessages.repeatPassword }}
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
import baseAlertMessage from "../components/base/baseAlertMessage.vue";
import { useStore } from "vuex";
import { useField } from "vee-validate";
import * as yup from "yup";
import { computed } from '@vue/runtime-core';
import {shake} from "@/helpers/ui-methods.js";
export default {
  components: { baseAlertMessage },
  setup(props, context) {
    let model = reactive({
      email: "",
      password: "",
      repeatPassword: "",
    });
    const errorsMessages = reactive({});
    const store = useStore();
    const hasError = computed(()=>{
      for(let prop in errorsMessages){
        let value = errorsMessages[prop] 
        console.log(value)
        if(value != null && value != undefined && value!="")
          return true  
      }
      return false;
    })
    
    const singUp = async () => {
      let card = document.getElementsByClassName('card')[0]
       console.log(errorsMessages);
      console.log(hasError.value);
      if(hasError.value){
        shake(card);
        return
      }
      if(model.password !== model.repeatPassword){
        console.log(errorsMessages);
        // errorsMessages['repeatPassword'] = "This field is different from the password"
        shake(card);
        return
      }
      store.dispatch('signUp',{})
      
    };
    function setField(name, yupRule) {
      let { value, errorMessage } = useField(name, yupRule);
      model[name] = value;
      errorsMessages[name] = errorMessage;
    }

    setField("email", yup.string().required().email());
    setField("password", yup.string().required().min(8));
    setField("repeatPassword", yup.string().oneOf([yup.ref('password'),null],'Passwords must match').required().min(8));
    return {
      model,
      singUp,
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
