<template>
  <div class="wrapper">
    <form @submit="entry">
    <div class="card">
      <div class="title">
        Авторизация
      </div>
        <div class="form">
          <div class="form-item">
            <base-validating-field
              :label="'Email'"
              name="email"
              :placeholder="'Your email'"
              :success-message="'Correct email'"
              type="email"
            />
          </div>
          <div class="form-item">
            <base-validating-field
              :label="'Password'"
              name="password"
              :placeholder="'Your password'"
              :success-message="'Correct password'"
              type="password"
            />
          </div>
        </div>
        <div class="actions">
          <base-button
            :height="'40px'"
            :width="'140px'"
            :type="'submit'"
          >
            Вход
          </base-button>
          <router-link :to="{ name: 'SingUp' }">
            <base-button
              class="btn-without-background"
              :height="'40px'"
              :width="'140px'"
            >
              Регистрация
            </base-button>
          </router-link>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import * as yup from 'yup'
import BaseButton from '../components/base/baseButton.vue'
import { shake } from '@/helpers/animation-methods.js'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useForm } from 'vee-validate'
export default {
  components: {
    BaseButton
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => store.state.user.user)
    if (user.value) {
      router.push({ name: 'User', params: { id: user.value.id } })
    }

    const scheme = yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(5).required()
    })

    const { handleSubmit } = useForm({
      validationSchema: scheme
    })
    const entry = handleSubmit(async (values) => {
      console.log(values)
      await store.dispatch('user/login', values).then(() => {
        router.push({ name: 'User', params: { id: user.value.id } })
      })
    })
    const invalidSubmit = () => {
      const card = document.getElementsByClassName('card')[0]
      shake(card)
    }
    return {
      invalidSubmit,
      entry,
      scheme
    }
  }
}
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
