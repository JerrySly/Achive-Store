<template>
  <div class="dialog-card">
    <div class="top">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div class="body">
      <slot />
    </div>
    <div class="bottom">
      <slot name="actions" >
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
