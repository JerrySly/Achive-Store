<template>
  <div>
    <div class="card">
      <base-sender-block></base-sender-block>
      <post-list style="margin-top: 30px;"></post-list>
    </div>
  </div>
</template>

<script>
import postItem from "../post/postItem.vue";
import PostList from '../post/postList.vue';
export default {
  components: { postItem, PostList },
  setup() {},
};
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
}
</style>
