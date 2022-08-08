<template>
  <div class="base">
    <textarea
      v-model="text"
      placeholder="Введите текст поста"
    />
    <div class="actions">
      <div @click="send">
        <icon-message
          :width="'48px'"
          :height="'48px'"
          :color="'rgb(38, 172, 33)'"
        />
      </div>
      <div @click="clear">
        <icon-delete
          :width="'48px'"
          :height="'48px'"
          :color="'rgb(38, 172, 33)'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  emits: ['send'],
  setup (props, context) {
    const text = ref('')
    const clear = () => {
      text.value = ''
    }
    const send = () => {
      context.emit('send', text)
      clear()
    }
    return { text, clear, send }
  }
}
</script>

<style scoped lang="scss">
.base {
  display: flex;
  text-align: center;
  textarea {
    outline: rgb(0, 0, 0);
    border: 1px solid $main-color;
    resize: vertical;
    height: 100px;
    border-radius: 5px;
    font-family: $main-font;
    font-size: 18px;
    padding: 5px;
    flex: 11;
  }
  .actions {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid $main-color;
    border-radius: 5px;
    margin-left: 5px;
    max-height: 100px;
    div {
      cursor: pointer;
    }
  }
}
</style>
