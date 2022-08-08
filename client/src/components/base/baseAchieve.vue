<template>
  <img
    class="icon"
    :src="src"
    :style="computedSizes"
  >
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '50px'
    },
    height: {
      type: String,
      default: '50px'
    }
  },
  setup (props) {
    const computedSizes = {
      width: props.width,
      height: props.height
    }
    return { ...props, computedSizes }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
