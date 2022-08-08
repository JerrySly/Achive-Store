<template>
  <div>
    <img
      :src="user.avatar"
      alt=""
    >
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    return {
      user: props.user
    }
  }
}
</script>

<style lang="scss" scoped>
 img {
    min-width: 120px;
    min-height: 120px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 5px;
  }
</style>
