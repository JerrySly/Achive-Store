<template>
  <div class="nav-wrapper">
    <ul>
      <li class="spacer" />
      <li class="logo href">
        Achive Store
      </li>
      <li class="href">
        <router-link :to="{ name: 'User', params: { id: 1 } }">
          <icon-home />
        </router-link>
      </li>
      <li class="href">
        <router-link :to="{ name: 'Achieves' }">
          <icon-achives />
        </router-link>
      </li>
      <li class="href">
        <router-link :to="{ name: 'Messages' }">
          <icon-message />
        </router-link>
      </li>
      <li @click="changeSettingsDialog(true, $event)" class="href">
        <div><icon-cog /></div>
        <base-drop-list v-click-out="changeSettingsDialog"   v-if="settingsDialog" :items="settingsList"/>
      </li>
      <li class="spacer" />
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import baseDropList from '../base/baseDropList.vue'
export default {
  components: { baseDropList },
  setup () {
    const router = useRouter()
    const store = useStore()
    let settingsDialog = ref(false)
    const changeSettingsDialog = (changeValue, $event) => {
      settingsDialog.value = changeValue
      if ($event) {
        $event.stopPropagation()
      }
    }
    const settingsList = [
      { text: 'Настройки профиля', action: () => { console.log('Route to settings') } },
      {
        text: 'Выйти из аккаунта',
        action: async () => {
          await store.dispatch('user/logout')
          router.push({ name: 'Authorization' })
        }
      }
    ]
    return {
      settingsList,
      settingsDialog,
      changeSettingsDialog
    }
  }
}
</script>
