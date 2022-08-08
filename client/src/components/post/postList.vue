<template>
  <div>
    <post-item
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import postItem from './postItem.vue'
import postService from '@/services/postService.js'
export default {
  components: { postItem },
  setup () {
    return {
      posts: postService.getUserPosts(1)
    }
  }
}
</script>

<style></style>
