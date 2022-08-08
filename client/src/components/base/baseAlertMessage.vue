<template>
  <div
    class="alert"
    :style="style"
  >
    <div style="flex:2">
      <icon-alert-symbol :color="'#fff'" />
    </div>
    <div style="flex:1" />
    <div class="block">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'none'
    },

    height: {
      type: String,
      default: '100%'
    }
  },
  setup (props) {
    const style = {
      width: props.width,
      height: props.height
    }
    return {
      style
    }
  }
}
</script>

<style scoped lang="scss">
.alert {
  padding: 5px;
  color: #fff;
  background-color: $alert-color;
  border-radius: 8px;
  display: flex;
  align-items: center;
  .block {
    flex: 15;
    word-wrap: break-word;
    text-align: left;
  }
}
</style>
