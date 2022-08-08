<template>
  <div class="card">
    <div class="title">
      Достижения пользователя
    </div>
    <div class="achieves-list">
      <div
        v-for="(achieve,index) in achieveList"
        :key="index"
      >
        <base-achieve :src="achieve.src" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseAchieve from '../base/baseAchieve.vue'
import { achieveList } from '@/data/achieves.js'
export default {
  components: {
    BaseAchieve
  },
  setup () {
    return {
      achieveList
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  text-align: left;
  padding: 20px 15px 10px;
  .title {
    font-size: 26px;
  }
  .achieves-list{
    display: flex;
    margin-top: 10px;
    div{
      margin: 5px;
    }
  }
}
</style>
