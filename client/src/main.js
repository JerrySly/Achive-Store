import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { lowerFirst } from 'lodash'
import { ValidationProvider } from 'vee-validate';
const Vue = createApp(App)


function addRequiredComponent(context){
  context.keys().forEach(fileName => {
    const componentConfig = context(fileName)
  
    const componentName = upperFirst(
      camelCase(
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
  
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
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

addRequiredComponent(icons);
addRequiredComponent(baseComponents);

icons.keys().forEach(fileName => {
  const componentConfig = icons(fileName)

  const componentName = lowerFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
Vue.component('ValidateBlock',ValidationProvider);
Vue.use(store).use(router).mount('#app')
