<template>
  <div>
    <div class="card">
      <base-sender-block />
      <post-list style="margin-top: 30px;" />
    </div>
  </div>
</template>

<script>
import PostList from '../post/postList.vue'
export default {
  components: { PostList },
  setup () {}
}
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
}
</style>
