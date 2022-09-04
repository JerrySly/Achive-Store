import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { lowerFirst } from 'lodash'
import axios from 'axios'
import userService from './services/userService'
import './styles/global.scss'
const Vue = createApp(App)

axios.defaults.baseURL = 'http://localhost:5000'
axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (err) => {
    let refreshingToken
    const { status } = err.response
    if (status === 401) {
      console.log('401')

      if (!refreshingToken) {
        refreshingToken = true
        userService
          .refreshToken()
          .then(({ status }) => {
            console.log('True')
            if (status === 200 || status === 204) {
              refreshingToken = false
            }
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
  }
)

function addRequiredComponent (context) {
  context.keys().forEach((fileName) => {
    const componentConfig = context(fileName)

    const componentName = upperFirst(
      camelCase(
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

const icons = require.context(
  './components/icons',
  false,
  /icon[A-Z]\w+\.(vue|js)$/
)

const baseComponents = require.context(
  './components/base',
  false,
  /base[A-Z]\w+\.(vue|js)$/
)

addRequiredComponent(icons)
addRequiredComponent(baseComponents)

icons.keys().forEach((fileName) => {
  const componentConfig = icons(fileName)

  const componentName = lowerFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
Vue.use(store).use(router).mount('#app')
