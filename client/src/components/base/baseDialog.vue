<template>
  <div class="card">
    <div class="top">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div class="body">
      <slot />
    </div>
    <div class="bottom">
      <slot name="actions">
        <base-button
          :height="'40px'"
          v-for="(btn, index) in actions"
          :key="index"
          @click="btn.action"
        >
          {{ btn.text }}
        </base-button>
      </slot>
    </div>
  </div>
</template>

<script>
import baseButton from './baseButton.vue'
export default {
  components: { baseButton },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    actions: {
      default: [{
        text: 'Save',
        action: () => console.log('Saved'),
        color: 'red'
      }]
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  position: absolute;
  z-index: 10;
  margin-top: 200px;
  min-width: 400px;
  max-width: 600px;
  padding: 10px 0 10px 0;

  .top {
     text-align: left;
     padding-left: 10px;
     padding-bottom: 5px;
  }

  .body {
    padding-top: 10px;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 10px;
  }

  .bottom {
    padding-top: 10px;
    padding-right: 10px;
    text-align: right;
  }
}
</style>
